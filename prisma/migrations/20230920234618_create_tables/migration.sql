-- CreateTable
CREATE TABLE "banks" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "type_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "banks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBank" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "bank_id" UUID NOT NULL,

    CONSTRAINT "UserBank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investiments" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "transaction_date" TIMESTAMP(3) NOT NULL,
    "asset_name" TEXT NOT NULL,
    "assetType" TEXT NOT NULL,
    "initial_investment" DECIMAL(65,30) NOT NULL,
    "current_value" DECIMAL(65,30) NOT NULL,
    "user_bank_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "investiments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserBank" ADD CONSTRAINT "UserBank_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "banks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBank" ADD CONSTRAINT "UserBank_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investiments" ADD CONSTRAINT "investiments_user_bank_id_fkey" FOREIGN KEY ("user_bank_id") REFERENCES "UserBank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
