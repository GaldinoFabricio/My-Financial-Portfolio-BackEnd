import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBankIdIncomesUseCase } from "./UpdateBankIdIncomesUseCase";

class UpdateBankIdIncomesController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
            bank_id: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id, bank_id } = request.body;

      const updateBankIdIncomesUseCase = container.resolve(
         UpdateBankIdIncomesUseCase
      );
      await updateBankIdIncomesUseCase.execute({
         id,
         bank_id,
      });

      return response.status(201).send();
   }
}

export { UpdateBankIdIncomesController };
