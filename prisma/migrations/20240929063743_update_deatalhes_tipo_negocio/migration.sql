/*
  Warnings:

  - The `quintal` column on the `DetalhesDaPropriedade` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DetalhesDaPropriedade" DROP COLUMN "quintal",
ADD COLUMN     "quintal" BOOLEAN;
