import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByBankIdIncomesUseCase } from "./FindByBankIdIncomesUseCase";

class FindByBankIdIncomesController {
   async handle(
      request: Request<{
         bank_id: string;
      }>,
      response: Response
   ): Promise<Response> {
      const { bank_id } = request.params;

      const findByBankIdIncomesUseCase = container.resolve(
         FindByBankIdIncomesUseCase
      );
      const data = await findByBankIdIncomesUseCase.execute({
         bank_id,
      });

      return response.status(200).send(data);
   }
}

export { FindByBankIdIncomesController };
