import { Decimal } from "@prisma/client/runtime/library";
import { ICreateExpenseCategoryTableDTO } from "../../dto/ICreateExpenseCategoryTableDTO";
import { IExpenseCategoryTableRepository } from "../IExpenseCategoryTableRepository";
import { prismaClient } from "../../../../database";
import { ExpenseCategoryTable } from "@prisma/client";
import { IDeleteExpenseCategoryTableDTO } from "../../dto/IDeleteExpenseCategoryTableDTO";
import { IFindIdExpenseCategoryTableDTO } from "../../dto/IFindIdExpenseCategoryTableDTO";
import { IFindUserIdExpenseCategoryTableDTO } from "../../dto/IFindUserIdExpenseCategoryTableDTO";
import { ILogicalDeleteExpenseCategoryTableDTO } from "../../dto/ILogicalDeleteExpenseCategoryTableDTO";
import { IUpdateExpenseCategoryTableDTO } from "../../dto/IUpdateExpenseCategoryTableDTO";
import { IUpdateMonthlyExpenseExpenseCategoryTable } from "../../dto/IUpdateMonthlyExpenseExpenseCategoryTableDTO";
import { IUpdatePaymentDateExpenseCategoryTableDTO } from "../../dto/IUpdatePaymentDateExpenseCategoryTableDTO";

class ExpenseCategoryTableRepository
   implements IExpenseCategoryTableRepository
{
   async create(
      input: ICreateExpenseCategoryTableDTO
   ): Promise<ExpenseCategoryTable> {
      return await prismaClient.expenseCategoryTable.create({ data: input });
   }

   async delete({ id }: IDeleteExpenseCategoryTableDTO): Promise<void> {
      await prismaClient.expenseCategoryTable.delete({
         where: { id },
      });
   }

   async findId({
      id,
   }: IFindIdExpenseCategoryTableDTO): Promise<ExpenseCategoryTable | null> {
      return await prismaClient.expenseCategoryTable.findFirst({
         where: { id },
      });
   }

   async findUser({
      month,
      user_id,
   }: IFindUserIdExpenseCategoryTableDTO): Promise<ExpenseCategoryTable[]> {
      return await prismaClient.expenseCategoryTable.findMany({
         where: { user_id, month },
      });
   }

   async logicalDelete({
      id,
   }: ILogicalDeleteExpenseCategoryTableDTO): Promise<ExpenseCategoryTable> {
      return await prismaClient.expenseCategoryTable.update({
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
      category_id,
      month,
      monthly_budget,
      user_id,
   }: IUpdateExpenseCategoryTableDTO): Promise<ExpenseCategoryTable> {
      return await prismaClient.expenseCategoryTable.update({
         where: { id },
         data: { category_id, month, monthly_budget, user_id },
      });
   }

   async updateMonthlyExpense({
      id,
      monthly_expense,
      payment_date,
   }: IUpdateMonthlyExpenseExpenseCategoryTable): Promise<ExpenseCategoryTable> {
      return await prismaClient.expenseCategoryTable.update({
         where: { id },
         data: { monthly_expense, payment_date },
      });
   }

   async updatePaymentDate({
      id,
   }: IUpdatePaymentDateExpenseCategoryTableDTO): Promise<void> {
      await prismaClient.expenseCategoryTable.update({
         where: {
            id,
         },
         data: {
            payment_date: new Date(),
         },
      });
   }
}

export { ExpenseCategoryTableRepository };
