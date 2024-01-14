import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateMonthlyExpenseFixedExpenseUseCase } from "./UpdateMonthlyExpenseFixedExpenseUseCase";

class UpdateMonthlyExpenseFixedExpenseController {
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

      const updateMonthlyExpenseFixedExpenseUseCase = container.resolve(
         UpdateMonthlyExpenseFixedExpenseUseCase
      );
      const data = await updateMonthlyExpenseFixedExpenseUseCase.execute({
         id,
         monthly_expense,
         payment_date,
      });

      return response.status(201).send(data);
   }
}

export { UpdateMonthlyExpenseFixedExpenseController };
