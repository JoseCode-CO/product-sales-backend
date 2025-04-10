/*
  Warnings:

  - Added the required column `currency` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerIdentification` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentSourceId` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "customerEmail" TEXT NOT NULL,
ADD COLUMN     "customerIdentification" TEXT NOT NULL,
ADD COLUMN     "customerName" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "paymentSourceId" TEXT NOT NULL;
