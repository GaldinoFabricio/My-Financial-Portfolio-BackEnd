import { ICreateCardExpensesDTO } from "../../dto/ICreateCardExpensesDTO";
import { prismaClient } from "../../../../database";
import { CardExpenses } from "@prisma/client";
import { IDeleteCardExpensesDTO } from "../../dto/IDeleteCardExpensesDTO";
import { IFindIdCardExpensesDTO } from "../../dto/IFIndIdCardExpensesDTO";
import { IFindUserIdCardExpensesDTO } from "../../dto/IFindUserIdCardExpensesDTO";
import { IUpdateCardExpensesDTO } from "../../dto/IUpdateCardExpensesDTO";
import { ICardExpensesRepository } from "../ICardExpensesRepository";

class CardExpensesRepository implements ICardExpensesRepository {
   async create({
      value,
      ...props
   }: ICreateCardExpensesDTO): Promise<CardExpenses> {
      return await prismaClient.cardExpenses.create({
         data: { value_expense: value, ...props },
      });
   }

   async delete({ id }: IDeleteCardExpensesDTO): Promise<CardExpenses> {
      return await prismaClient.cardExpenses.update({
         where: {
            id,
         },
         data: {
            deleted: true,
            deleted_at: new Date(),
         },
      });
   }

   async findId({ id }: IFindIdCardExpensesDTO): Promise<CardExpenses | null> {
      return await prismaClient.cardExpenses.findFirst({
         where: { id },
      });
   }

   async findUserId({
      user_id,
      final_date,
      intial_date,
   }: IFindUserIdCardExpensesDTO): Promise<CardExpenses[]> {
      return await prismaClient.$queryRaw`
         SELECT
            card_expenses.id,
            card_expenses.bank_id,
            card_expenses.description,
            card_expenses.card_type,
            card_expenses.value_expense,
            card_expenses.date_expense
         FROM
            card_expenses
            INNER JOIN users_banks ON users_banks.bank_id = card_expenses.bank_id
         WHERE
            user_id = ${user_id}
            AND card_expenses.date_expense BETWEEN ${intial_date} AND ${final_date};`;
   }

   async update({
      id,
      card_type,
      date_expense,
      description,
      bank_id,
      value,
   }: IUpdateCardExpensesDTO): Promise<CardExpenses> {
      return await prismaClient.cardExpenses.update({
         where: {
            id,
         },
         data: {
            card_type,
            date_expense,
            description,
            bank_id,
            value_expense: value,
            updated_at: new Date(),
         },
      });
   }
}

export { CardExpensesRepository };
