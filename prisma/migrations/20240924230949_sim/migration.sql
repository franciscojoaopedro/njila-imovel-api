-- DropForeignKey
ALTER TABLE "Propreedade" DROP CONSTRAINT "Propreedade_detalhesId_fkey";

-- AddForeignKey
ALTER TABLE "Propreedade" ADD CONSTRAINT "Propreedade_detalhesId_fkey" FOREIGN KEY ("detalhesId") REFERENCES "DetalhesDaPropriedade"("id") ON DELETE CASCADE ON UPDATE CASCADE;
