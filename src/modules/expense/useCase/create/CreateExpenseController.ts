import { Request, Response } from "express";
import { CreateExpenseUseCase } from "./CreateExpenseUseCase";
import { Decimal } from "@prisma/client/runtime/library";
import { ExpenseRepository } from "../../repositorie/implemantion/ExpenseRepository";
import { BankRepository } from "../../../bank/repositorie/implemantion/BankRepository";
import { Bank, PaymentType } from "@prisma/client";

class CreateExpenseController {
   async handle(
      request: Request<
         any,
         any,
         {
            name: string;
            category_id: string;
            expense: Decimal;
            payment_date: string;
            payment_type: PaymentType;
            bank: Bank;
            month?: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const {
         bank,
         category_id,
         expense,
         name,
         payment_date,
         payment_type,
         month,
      } = request.body;
      const { id } = request.user;

      const createExpenseUseCase = new CreateExpenseUseCase(
         new ExpenseRepository(),
         new BankRepository()
      );
      await createExpenseUseCase.execute({
         bank,
         category_id,
         expense,
         name,
         payment_date,
         payment_type,
         user_id: id,
         month,
      });

      return response.status(201).send();
   }
}

export { CreateExpenseController };
