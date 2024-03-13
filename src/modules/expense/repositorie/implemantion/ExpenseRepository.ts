import { Expenses } from "@prisma/client";
import { IExpenseRepository } from "../IExpenseRepository";
import { ICreateExpenseDTO } from "../../dto/ICreateExpenseDTO";
import { prismaClient } from "../../../../database";
import { Decimal } from "@prisma/client/runtime/library";
import { IUpdateExpenseDTO } from "../../dto/IUpdateExpenseDTO";
import { endOfMonth, getMonth, startOfMonth } from "date-fns";
import { IUpdateMonthExpenseDTO } from "../../dto/IUpdateMonthExpenseDTO";
import { IFindByUserIdExpenseDTO } from "../../dto/IFindByUserIdExpenseDTO";
import { IFindByBankExpenseDTO } from "../../dto/IFindByBankExpenseDTO";

class ExpenseRepository implements IExpenseRepository {
   async create(input: ICreateExpenseDTO): Promise<Expenses> {
      return await prismaClient.expenses.create({
         data: {
            name: input.name,
            category_id: input.category_id,
            user_id: input.user_id,
            expense: input.expense,
            payment_date: input.payment_date,
            payment_type: input.payment_type,
            bank: input.bank,
            month: input.month,
         },
      });
   }

   async findByBank({
      user_id,
      bank,
      month,
   }: IFindByBankExpenseDTO): Promise<Expenses[]> {
      return await prismaClient.expenses.findMany({
         where: {
            user_id,
            bank,
            month: month ? month : getMonth(new Date()).toString(),
         },
      });
   }

   async findById(id: string): Promise<Expenses | null> {
      return await prismaClient.expenses.findUnique({ where: { id } });
   }

   async findByUserId({
      final_date,
      intial_date,
      page,
      pageSize,
      user_id,
   }: IFindByUserIdExpenseDTO): Promise<{
      expense: Expenses[];
      totalPages: number;
   }> {
      const totalPages = await prismaClient.expenses.count({
         where: {
            user_id: user_id,
            payment_date: {
               gte: intial_date ? intial_date : startOfMonth(new Date()),
               lte: final_date ? final_date : endOfMonth(new Date()),
            },
         },
      });

      const offset = (page - 1) * pageSize;

      const expense = await prismaClient.expenses.findMany({
         where: {
            user_id,
            payment_date: {
               gte: intial_date ? intial_date : startOfMonth(new Date()),
               lte: final_date ? final_date : endOfMonth(new Date()),
            },
         },
         take: pageSize,
         skip: offset,
      });

      return {
         expense,
         totalPages: Math.ceil(totalPages / pageSize),
      };
   }

   async update(input: IUpdateExpenseDTO): Promise<Expenses> {
      return await prismaClient.expenses.update({
         data: input,
         where: { id: input.id },
      });
   }

   async updateMonth(expense: IUpdateMonthExpenseDTO): Promise<void> {
      await prismaClient.expenses.update({
         where: { id: expense.id },
         data: { month: expense.month },
      });
   }
}

export { ExpenseRepository };
