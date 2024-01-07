import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMonthlyCombinedCardExpensesUseCase } from "./CreateMonthlyCombinedCardExpensesUseCase";

class CreateMonthlyCombinedCardExpensesController {
   async handle(
      request: Request<
         any,
         any,
         {
            user_bank_id: string;
            description: string;
            card_type: string;
            date_expense: Date;
            value: number;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { card_type, date_expense, description, user_bank_id, value } =
         request.body;

      const createMonthlyCombinedCardExpensesUseCAse = container.resolve(
         CreateMonthlyCombinedCardExpensesUseCase
      );
      const data = await createMonthlyCombinedCardExpensesUseCAse.execute({
         card_type,
         date_expense,
         description,
         user_bank_id,
         value,
      });

      return response.status(201).send(data);
   }
}

export { CreateMonthlyCombinedCardExpensesController };
