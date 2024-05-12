import { Expenses } from "@prisma/client";
import { endOfMonth, getMonth, startOfMonth } from "date-fns";
import { prismaClient } from "../../../database";
import { IExpenseService } from "./IExpenseService";
import { ICreateExpenseDTO } from "../dto/ICreateExpenseDTO";
import { IFindByBankExpenseDTO } from "../dto/IFindByBankExpenseDTO";
import { IFindByUserIdExpenseDTO } from "../dto/IFindByUserIdExpenseDTO";
import { IUpdateExpenseDTO } from "../dto/IUpdateExpenseDTO";
import { IUpdateMonthExpenseDTO } from "../dto/IUpdateMonthExpenseDTO";

class ExpenseService implements IExpenseService {
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

   async findAll({
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
            payment_date: {
               gte: new Date(intial_date),
               lte: new Date(final_date),
            },
         },
      });

      const offset = (page - 1) * pageSize;

      const expense = await prismaClient.expenses.findMany({
         where: {
            payment_date: {
               gte: new Date(intial_date),
               lte: new Date(final_date),
            },
         },
         /*take: pageSize,
         skip: offset,*/
      });

      return {
         expense,
         totalPages: Math.ceil(totalPages / pageSize),
      };
   }

   async findCategoryExpenseSum(
      user_id: string,
      initial: string,
      final: string
   ): Promise<
      {
         name: string;
         total_expense: number;
      }[]
   > {
      return await prismaClient.$queryRaw<
         {
            name: string;
            total_expense: number;
         }[]
      >`
         SELECT categories.name, SUM(expense) AS total_expense
         FROM expenses
         INNER JOIN categories ON expenses.category_id = categories.id
         WHERE payment_date BETWEEN ${new Date(initial)} AND ${new Date(final)}
         AND expenses.category_id != '27d0a7d5-2ec5-4820-aa14-06a92b219315'
         GROUP BY category_id, categories.name;
      `;
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

export { ExpenseService };
