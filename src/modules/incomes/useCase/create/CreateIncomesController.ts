import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateIncomesUseCase } from "./CreateIncomesUseCase";

class CreateIncomesController {
   async handle(
      request: Request<
         any,
         any,
         {
            description: string;
            amount: number;
            receiver_date: Date;
            bank_id: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { amount, bank_id, description, receiver_date } = request.body;

      const createIncomesUseCase = container.resolve(CreateIncomesUseCase);
      const data = await createIncomesUseCase.execute({
         amount,
         bank_id,
         description,
         receiver_date,
      });

      return response.status(201).send(data);
   }
}

export { CreateIncomesController };
