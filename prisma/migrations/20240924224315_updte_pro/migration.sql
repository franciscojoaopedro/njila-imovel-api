/*
  Warnings:

  - You are about to drop the column `propriedadeId` on the `DetalhesDaPropriedade` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[detalhesId]` on the table `Propreedade` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `detalhesId` to the `Propreedade` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DetalhesDaPropriedade" DROP CONSTRAINT "DetalhesDaPropriedade_id_fkey";

-- AlterTable
ALTER TABLE "DetalhesDaPropriedade" DROP COLUMN "propriedadeId";

-- AlterTable
ALTER TABLE "Propreedade" ADD COLUMN     "detalhesId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Propreedade_detalhesId_key" ON "Propreedade"("detalhesId");

-- AddForeignKey
ALTER TABLE "Propreedade" ADD CONSTRAINT "Propreedade_detalhesId_fkey" FOREIGN KEY ("detalhesId") REFERENCES "DetalhesDaPropriedade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
