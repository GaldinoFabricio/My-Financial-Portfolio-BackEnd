import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateIncomesUseCase } from "./UpdateIncomesUseCase";

class UpdateIncomesController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
            description?: string;
            amount?: number;
            receiver_date?: Date;
            bank_id?: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id, amount, bank_id, description, receiver_date } = request.body;

      const updateIncomesUseCase = container.resolve(UpdateIncomesUseCase);
      const data = await updateIncomesUseCase.execute({
         id,
         amount,
         bank_id,
         description,
         receiver_date,
      });

      return response.status(201).send(data);
   }
}

export { UpdateIncomesController };
