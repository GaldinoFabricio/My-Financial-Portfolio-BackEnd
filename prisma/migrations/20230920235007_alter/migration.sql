/*
  Warnings:

  - You are about to drop the `UserBank` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserBank" DROP CONSTRAINT "UserBank_bank_id_fkey";

-- DropForeignKey
ALTER TABLE "UserBank" DROP CONSTRAINT "UserBank_user_id_fkey";

-- DropForeignKey
ALTER TABLE "investiments" DROP CONSTRAINT "investiments_user_bank_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "updated_at" DROP DEFAULT;

-- DropTable
DROP TABLE "UserBank";

-- CreateTable
CREATE TABLE "users_banks" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "bank_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_banks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users_banks" ADD CONSTRAINT "users_banks_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "banks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_banks" ADD CONSTRAINT "users_banks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "investiments" ADD CONSTRAINT "investiments_user_bank_id_fkey" FOREIGN KEY ("user_bank_id") REFERENCES "users_banks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
