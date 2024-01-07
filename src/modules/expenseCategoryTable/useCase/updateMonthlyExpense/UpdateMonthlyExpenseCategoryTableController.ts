import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateMonthlyExpenseExpenseCategoryTableUseCase } from "./UpdateMonthlyExpenseExpenseCategoryTableUseCase";

class UpdateMonthlyExpenseExpenseCategoryTableController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
            monthly_expense: number;
            payment_date?: Date;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id, monthly_expense, payment_date } = request.body;

      const updateMonthlyExpenseExpenseCategoryTableUseCase = container.resolve(
         UpdateMonthlyExpenseExpenseCategoryTableUseCase
      );
      const data =
         await updateMonthlyExpenseExpenseCategoryTableUseCase.execute({
            id,
            monthly_expense,
            payment_date,
         });

      return response.status(201).send(data);
   }
}

export { UpdateMonthlyExpenseExpenseCategoryTableController };
