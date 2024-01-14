import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCardExpenseUseCase } from "./UpdateCardExpenseUseCase";

class UpdateCardExpenseController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
            bank_id?: string;
            description?: string;
            card_type?: string;
            date_expense?: Date;
            value?: number;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id, bank_id, card_type, date_expense, description, value } =
         request.body;

      const updateCardExpenseController = container.resolve(
         UpdateCardExpenseUseCase
      );
      const data = await updateCardExpenseController.execute({
         id,
         bank_id,
         card_type,
         date_expense,
         description,
         value,
      });

      return response.status(201).send(data);
   }
}

export { UpdateCardExpenseController };
