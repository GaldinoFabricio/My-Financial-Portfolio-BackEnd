import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAmountIncomesUseCase } from "./UpdateAmoutIncomesUseCase";

class UpdateAmountIncomesController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
            amount: number;
            receiver_date?: Date;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id, amount, receiver_date } = request.body;

      const updateAmountIncomesUseCase = container.resolve(
         UpdateAmountIncomesUseCase
      );
      await updateAmountIncomesUseCase.execute({
         id,
         amount,
         receiver_date,
      });

      return response.status(201).send();
   }
}

export { UpdateAmountIncomesController };
