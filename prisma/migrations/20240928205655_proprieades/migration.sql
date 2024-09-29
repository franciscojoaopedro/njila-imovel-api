/*
  Warnings:

  - You are about to drop the column `estado` on the `Propreedade` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "DisponibilidadePropriedade" ADD VALUE 'EM_NEGOCIACAO';
ALTER TYPE "DisponibilidadePropriedade" ADD VALUE 'COMPRADO';
ALTER TYPE "DisponibilidadePropriedade" ADD VALUE 'ARRENDADO';

-- DropForeignKey
ALTER TABLE "Avatar" DROP CONSTRAINT "Avatar_userId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteProperty" DROP CONSTRAINT "FavoriteProperty_propreedadeId_fkey";

-- DropForeignKey
ALTER TABLE "ImagemPropriedade" DROP CONSTRAINT "ImagemPropriedade_propreedadeId_fkey";

-- DropForeignKey
ALTER TABLE "Reservas" DROP CONSTRAINT "Reservas_propreedadeId_fkey";

-- AlterTable
ALTER TABLE "Propreedade" DROP COLUMN "estado";

-- AddForeignKey
ALTER TABLE "ImagemPropriedade" ADD CONSTRAINT "ImagemPropriedade_propreedadeId_fkey" FOREIGN KEY ("propreedadeId") REFERENCES "Propreedade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avatar" ADD CONSTRAINT "Avatar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservas" ADD CONSTRAINT "Reservas_propreedadeId_fkey" FOREIGN KEY ("propreedadeId") REFERENCES "Propreedade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteProperty" ADD CONSTRAINT "FavoriteProperty_propreedadeId_fkey" FOREIGN KEY ("propreedadeId") REFERENCES "Propreedade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
