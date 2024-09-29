/*
  Warnings:

  - The `elevador` column on the `DetalhesDaPropriedade` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `carregamentoCarrosEletricos` column on the `DetalhesDaPropriedade` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `estado` to the `Propreedade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoNegocio` to the `Propreedade` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tipo` on the `Propreedade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipoPropriedade" AS ENUM ('APARTAMENTO', 'ESTUDIO', 'VIVENDA', 'PREDIO', 'TERRENO', 'QUINTA', 'FAZENDA', 'LOJA', 'ESCRITORIO');

-- CreateEnum
CREATE TYPE "TipoNegocio" AS ENUM ('VENDA', 'ARRENDAMENTO');

-- CreateEnum
CREATE TYPE "EstadoPropriedade" AS ENUM ('COMPRADO', 'ARRENDADO');

-- CreateEnum
CREATE TYPE "DisponibilidadePropriedade" AS ENUM ('DISPONIVEL', 'INDISPONIVEL');

-- AlterTable
ALTER TABLE "DetalhesDaPropriedade" DROP COLUMN "elevador",
ADD COLUMN     "elevador" BOOLEAN,
DROP COLUMN "carregamentoCarrosEletricos",
ADD COLUMN     "carregamentoCarrosEletricos" BOOLEAN;

-- AlterTable
ALTER TABLE "Propreedade" ADD COLUMN     "arrendadoEm" TIMESTAMP(3),
ADD COLUMN     "disponibilidade" "DisponibilidadePropriedade" NOT NULL DEFAULT 'DISPONIVEL',
ADD COLUMN     "estado" "EstadoPropriedade" NOT NULL,
ADD COLUMN     "tipoNegocio" "TipoNegocio" NOT NULL,
ADD COLUMN     "vendidoEm" TIMESTAMP(3),
DROP COLUMN "tipo",
ADD COLUMN     "tipo" "TipoPropriedade" NOT NULL;
