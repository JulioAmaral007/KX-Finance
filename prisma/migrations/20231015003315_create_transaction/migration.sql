-- CreateTable
CREATE TABLE "transaction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "price" DECIMAL(8,2) NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);
