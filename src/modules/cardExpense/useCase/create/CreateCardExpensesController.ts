import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCardExpensesUseCase } from "./CreateCardExpensesUseCase";

class CreateCardExpensesController {
   async handle(
      request: Request<
         any,
         any,
         {
            bank_id: string;
            description: string;
            card_type: string;
            date_expense: Date;
            value: number;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { card_type, date_expense, description, bank_id, value } =
         request.body;

      const createCardExpensesUseCase = container.resolve(
         CreateCardExpensesUseCase
      );
      const data = await createCardExpensesUseCase.execute({
         card_type,
         date_expense,
         description,
         bank_id,
         value,
      });

      return response.status(201).send(data);
   }
}

export { CreateCardExpensesController };
