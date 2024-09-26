-- CreateTable
CREATE TABLE "DetalhesDaPropriedade" (
    "id" TEXT NOT NULL,
    "propriedadeId" TEXT NOT NULL,
    "areaTotalLote" INTEGER,
    "quintal" INTEGER,
    "quartos" INTEGER,
    "anoConstrucao" INTEGER,
    "piso" TEXT,
    "wc" INTEGER,
    "elevador" TEXT,
    "estacionamento" TEXT,
    "carregamentoCarrosEletricos" TEXT,
    "detalhesEnergeticos" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DetalhesDaPropriedade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DetalhesDaPropriedade" ADD CONSTRAINT "DetalhesDaPropriedade_id_fkey" FOREIGN KEY ("id") REFERENCES "Propreedade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
