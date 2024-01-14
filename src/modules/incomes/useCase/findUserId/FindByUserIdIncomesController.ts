import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByUserIdIncomesUseCase } from "./FindByUserIdIncomesUseCase";

class FindByUserIdIncomesController {
   async handle(
      request: Request<{ user_id: string }>,
      response: Response
   ): Promise<Response> {
      const { user_id } = request.params;

      const findByUserIdIncomesUseCase = container.resolve(
         FindByUserIdIncomesUseCase
      );
      const data = await findByUserIdIncomesUseCase.execute({
         user_id,
      });

      return response.status(200).send(data);
   }
}

export { FindByUserIdIncomesController };
