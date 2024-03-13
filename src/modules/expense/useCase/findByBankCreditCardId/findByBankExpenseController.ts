import { Request, Response } from "express";
import { FindByBankExpenseUseCase } from "./findByBankExpenseUseCase";
import { ExpenseRepository } from "../../repositorie/implemantion/ExpenseRepository";
import { Bank } from "@prisma/client";

class FindByBankExpenseController {
   async handle(
      request: Request<{ bank: Bank; month?: string }>,
      response: Response
   ): Promise<Response> {
      const { bank, month } = request.params;
      const { id } = request.user;

      const findByBankExpenseUseCase = new FindByBankExpenseUseCase(
         new ExpenseRepository()
      );
      const expense = await findByBankExpenseUseCase.execute({
         bank,
         month,
         user_id: id as string,
      });

      return response.status(200).send(expense);
   }
}
