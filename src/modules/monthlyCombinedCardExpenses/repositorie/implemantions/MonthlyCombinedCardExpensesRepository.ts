import { Decimal } from "@prisma/client/runtime/library";
import { ICreateMonthlyCombinedCardExpensesDTO } from "../../dto/ICreateMonthlyCombinedCardExpensesDTO";
import { IMonthlyCombinedCardExpensesRepository } from "../IMonthlyCombinedCardExpensesRepository";
import { prismaClient } from "../../../../database";
import { MonthlyCombinedCardExpenses } from "@prisma/client";
import { IDeleteMonthlyCombinedCardExpensesDTO } from "../../dto/IDeleteMonthlyCombinedCardExpensesDTO";
import { IFindIdMonthlyCombinedCardExpensesDTO } from "../../dto/IFIndIdMonthlyCombinedCardExpensesDTO";
import { IFindUserIdMonthlyCombinedCardExpensesDTO } from "../../dto/IFindUserIdMonthlyCombinedCardExpensesDTO";
import { ILogicalDelteMonthlyCombinedCardExpensesDTO } from "../../dto/ILogicalDeleteMonthlyCombinedCardExpensesDTO";
import { IUpdateMonthlyCombinedCardExpensesDTO } from "../../dto/IUpdateMonthlyCombinedCardExpensesDTO";

class MonthlyCombinedCardExpensesRepository
   implements IMonthlyCombinedCardExpensesRepository
{
   async create(
      input: ICreateMonthlyCombinedCardExpensesDTO
   ): Promise<MonthlyCombinedCardExpenses> {
      return await prismaClient.monthlyCombinedCardExpenses.create({
         data: input,
      });
   }

   async delete({ id }: IDeleteMonthlyCombinedCardExpensesDTO): Promise<void> {
      await prismaClient.monthlyCombinedCardExpenses.delete({ where: { id } });
   }

   async findId({
      id,
   }: IFindIdMonthlyCombinedCardExpensesDTO): Promise<MonthlyCombinedCardExpenses | null> {
      return await prismaClient.monthlyCombinedCardExpenses.findFirst({
         where: { id },
      });
   }

   async findUserId({
      user_id,
      final_date,
      intial_date,
   }: IFindUserIdMonthlyCombinedCardExpensesDTO): Promise<
      MonthlyCombinedCardExpenses[]
   > {
      return await prismaClient.monthlyCombinedCardExpenses.findMany({
         where: {
            user_bank: {
               user_id,
            },
            date_expense: {
               gte: intial_date,
               lte: final_date,
            },
         },
      });
   }

   async logicalDelete({
      id,
   }: ILogicalDelteMonthlyCombinedCardExpensesDTO): Promise<MonthlyCombinedCardExpenses> {
      return await prismaClient.monthlyCombinedCardExpenses.update({
         where: {
            id,
         },
         data: {
            deleted: true,
            deleted_at: new Date(),
         },
      });
   }

   async update({
      id,
      card_type,
      date_expense,
      description,
      user_bank_id,
      value,
   }: IUpdateMonthlyCombinedCardExpensesDTO): Promise<MonthlyCombinedCardExpenses> {
      return await prismaClient.monthlyCombinedCardExpenses.update({
         where: {
            id,
         },
         data: {
            card_type,
            date_expense,
            description,
            user_bank_id,
            value,
         },
      });
   }
}

export { MonthlyCombinedCardExpensesRepository };
