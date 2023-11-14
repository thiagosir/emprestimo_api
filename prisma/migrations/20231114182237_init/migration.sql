-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL,
    "cpf" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "income" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cpf_key" ON "Customer"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Loan_type_key" ON "Loan"("type");
