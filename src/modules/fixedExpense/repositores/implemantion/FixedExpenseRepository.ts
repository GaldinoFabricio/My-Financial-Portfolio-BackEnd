import { prismaClient } from "../../../../database";
import { FixedExpenses } from "@prisma/client";
import { IFixedExpenseRepository } from "../IFixedExpenseRepository";
import { ICreateFixedExpenseDTO } from "../../dto/ICreateFixedExpenseDTO";
import { IDeleteFixedExpenseDTO } from "../../dto/IDeleteFixedExpenseDTO";
import { IFindIdFixedExpenseDTO } from "../../dto/IFindIdFixedExpenseDTO";
import { IFindUserIdFixedExpenseDTO } from "../../dto/IFindUserIdFixedExpenseDTO";
import { IUpdateFixedExpenseDTO } from "../../dto/IUpdateFixedExpenseDTO";
import { IUpdateMonthlyExpenseFixedExpenseDTO } from "../../dto/IUpdateMonthlyExpenseFixedExpenseDTO";
import { IUpdatePaymentDateFixedExpenseDTO } from "../../dto/IUpdatePaymentDateFixedExpenseDTO";

class FixedExpenseRepository implements IFixedExpenseRepository {
   async create(input: ICreateFixedExpenseDTO): Promise<FixedExpenses> {
      return await prismaClient.fixedExpenses.create({ data: input });
   }

   async delete({ id }: IDeleteFixedExpenseDTO): Promise<FixedExpenses> {
      return await prismaClient.fixedExpenses.update({
         where: { id },
         data: {
            deleted: true,
            deleted_at: new Date(),
         },
      });
   }

   async findId({ id }: IFindIdFixedExpenseDTO): Promise<FixedExpenses | null> {
      return await prismaClient.fixedExpenses.findFirst({
         where: { id },
      });
   }

   async findUser({
      month,
      user_id,
   }: IFindUserIdFixedExpenseDTO): Promise<FixedExpenses[]> {
      return await prismaClient.fixedExpenses.findMany({
         where: { user_id, month },
      });
   }

   async update({
      id,
      category_id,
      month,
      monthly_budget,
      user_id,
   }: IUpdateFixedExpenseDTO): Promise<FixedExpenses> {
      return await prismaClient.fixedExpenses.update({
         where: { id },
         data: { category_id, month, monthly_budget, user_id },
      });
   }

   async updateMonthlyExpense({
      id,
      monthly_expense,
      payment_date,
   }: IUpdateMonthlyExpenseFixedExpenseDTO): Promise<FixedExpenses> {
      return await prismaClient.fixedExpenses.update({
         where: { id },
         data: { monthly_expense, payment_date },
      });
   }

   async updatePaymentDate({
      id,
   }: IUpdatePaymentDateFixedExpenseDTO): Promise<void> {
      await prismaClient.fixedExpenses.update({
         where: {
            id,
         },
         data: {
            payment_date: new Date(),
         },
      });
   }
}

export { FixedExpenseRepository };
