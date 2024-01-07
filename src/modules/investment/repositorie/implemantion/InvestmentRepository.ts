import { Decimal } from "@prisma/client/runtime/library";
import { prismaClient } from "../../../../database";
import { ICreateInvestmentDTO } from "../../dto/ICreateInvestmentDTO";
import { IInvestmentRepository } from "../IInvestmentRepository";
import { Investment } from "@prisma/client";
import { IListAssetNameInvestmentDTO } from "../../dto/IListAssetNameInvestmentDTO";
import { IListIdInvestmentDTO } from "../../dto/IListIdInvestmentDTO";
import { IListUserBankIdInvestmentDTO } from "../../dto/IListUserBankIdInvestmentDTO";
import { IUpdateInvestmentDTO } from "../../dto/IUpdateInvestmentDTO";
import { IUpdatePriceInvestmentDTO } from "../../dto/IUpdatePriceInvestmentDTO";
import { IUpdateUserBankIdInvestmentDTO } from "../../dto/IUpdateUserBankIdInvestmentDTO";

class InvestmentRepository implements IInvestmentRepository {
   async create({
      asset_name,
      asset_type,
      price,
      transaction_date,
      user_bank_id,
      amount,
   }: ICreateInvestmentDTO): Promise<void> {
      await prismaClient.investment.create({
         data: {
            asset_name,
            asset_type,
            price,
            transaction_date,
            user_bank_id,
            amount,
         },
      });
   }

   async list(): Promise<Investment[]> {
      return await prismaClient.investment.findMany();
   }

   async listAssetName({
      asset_name,
   }: IListAssetNameInvestmentDTO): Promise<Investment[]> {
      return await prismaClient.investment.findMany({ where: { asset_name } });
   }

   async listId({ id }: IListIdInvestmentDTO): Promise<Investment | null> {
      return await prismaClient.investment.findFirst({ where: { id } });
   }

   async listUserBankId({
      user_bank_id,
   }: IListUserBankIdInvestmentDTO): Promise<Investment[]> {
      return await prismaClient.investment.findMany({
         where: { user_bank_id },
      });
   }

   async update({
      id,
      asset_name,
      asset_type,
      price,
      transaction_date,
      user_bank_id,
      amount,
   }: IUpdateInvestmentDTO): Promise<Investment> {
      return await prismaClient.investment.update({
         where: { id },
         data: {
            asset_name,
            asset_type,
            price,
            transaction_date,
            user_bank_id,
            amount,
         },
      });
   }

   async updatePrice({
      price,
      id,
   }: IUpdatePriceInvestmentDTO): Promise<Investment> {
      return await prismaClient.investment.update({
         where: { id },
         data: { price },
      });
   }

   async updateUserBankId({
      id,
      user_bank_id,
   }: IUpdateUserBankIdInvestmentDTO): Promise<Investment> {
      return await prismaClient.investment.update({
         where: { id },
         data: { user_bank_id },
      });
   }
}

export { InvestmentRepository };
