import { CreateCardDto } from './../dto/create-token-card.dto';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './../../../prisma.services';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionStatus } from '../domain/entities/transaction.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class TransactionRepository {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService
  ) {}

  private get baseUrl() {
    return this.configService.get<string>('BASE_URL');
  }

  private get publicKey() {
    return this.configService.get<string>('PUBLIC_KEY');
  }

  private get privateKey() {
    return this.configService.get<string>('PRIVATE_KEY');
  }


  private async getAcceptanceToken(): Promise<string> {
    const resp = await this.httpService.axiosRef.get(
      `${this.baseUrl}/merchants/${this.publicKey}`,
    );
    return resp.data.data.presigned_acceptance.acceptance_token;
  }

  private async createCardToken(dto: CreateTransactionDto, acceptanceToken: string): Promise<string> {
    const payload = {
      ...dto,
      acceptance_token: acceptanceToken,
    };

    const resp = await this.httpService.axiosRef.post(
      `${this.baseUrl}/tokens/cards`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${this.publicKey}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return resp.data.data.id;
  }

  private async createPaymentSource(cardToken: string, customerEmail: string, acceptanceToken: string): Promise<any> {
    const payload = {
      type: 'CARD',
      token: cardToken,
      customer_email: customerEmail,
      acceptance_token: acceptanceToken,
    };

    const resp = await this.httpService.axiosRef.post(
      `${this.baseUrl}/payment_sources`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${this.privateKey}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return resp.data.data;
  }

  async createCardAndPaymentSource(dto: CreateTransactionDto): Promise<any> {
    const acceptanceToken = await this.getAcceptanceToken();
    const cardToken = await this.createCardToken(dto, acceptanceToken);
    const paymentSource = await this.createPaymentSource(cardToken, dto.customerEmail, acceptanceToken);

    return {
      card_token: cardToken,
      payment_source: paymentSource,

    };
  }

  /*async create(data: CreateTransactionDto & { status: TransactionStatus }) {
    return this.prisma.transaction.create({
      data,
    });
  }*/


    async createTransaction(dto: CreateTransactionDto): Promise<any> {
      const baseUrl = this.configService.get<string>('BASE_URL');
      const privateKey = this.configService.get<string>('PUBLIC_KEY');
    
      const payload = {
        amount_in_cents: Math.round(dto.amount * 100),
        currency: dto.currency.toUpperCase(),
        customer_email: dto.customerEmail,
        payment_method: {
          type: 'CARD',
          //token: dto.cardToken, 
          installments: 1,
        },
        reference: dto.orderId,
       // signature: dto.signature
      };
    
      const response = await this.httpService.axiosRef.post(
        `${baseUrl}/transactions`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${privateKey}`,
            'Content-Type': 'application/json',
          },
        },
      );
    
      return response.data;
    }
    

}
