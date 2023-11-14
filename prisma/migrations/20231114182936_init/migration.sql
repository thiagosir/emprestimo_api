-- AlterTable
CREATE SEQUENCE customer_id_seq;
ALTER TABLE "Customer" ALTER COLUMN "id" SET DEFAULT nextval('customer_id_seq');
ALTER SEQUENCE customer_id_seq OWNED BY "Customer"."id";

-- AlterTable
CREATE SEQUENCE loan_id_seq;
ALTER TABLE "Loan" ALTER COLUMN "id" SET DEFAULT nextval('loan_id_seq');
ALTER SEQUENCE loan_id_seq OWNED BY "Loan"."id";
