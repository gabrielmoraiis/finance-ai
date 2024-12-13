/*
  Warnings:

  - Changed the type of `type` on the `Transaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TransactionsType" AS ENUM ('DEPOSIT', 'EXPENSE', 'INVESTMENT');

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "type",
ADD COLUMN     "type" "TransactionsType" NOT NULL;

-- DropEnum
DROP TYPE "TransactionStype";
