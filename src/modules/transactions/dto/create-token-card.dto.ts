import {
    IsCreditCard,
    IsNotEmpty,
    IsString,
    Matches,
    Length,
  } from 'class-validator';
  
  export class CreateCardDto {
    @IsCreditCard({ message: 'El número de tarjeta no es válido.' })
    number: string;
  
    @IsString()
    @Matches(/^\d{3,4}$/, {
      message: 'El CVC debe tener 3 o 4 dígitos numéricos.',
    })
    cvc: string;
  
    @IsString()
    @Matches(/^(0[1-9]|1[0-2])$/, {
      message: 'El mes de expiración debe estar entre 01 y 12.',
    })
    exp_month: string;
  
    @IsString()
    @Matches(/^\d{2}$/, {
      message: 'El año de expiración debe tener dos dígitos (ej. "29").',
    })
    exp_year: string;
  
    @IsString()
    @IsNotEmpty({ message: 'El nombre del titular no puede estar vacío.' })
    card_holder: string;
  }
  