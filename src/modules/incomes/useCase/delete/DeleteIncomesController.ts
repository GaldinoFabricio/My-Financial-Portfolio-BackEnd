import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteIncomesUseCase } from "./DeleteIncomesUseCase";

class DeleteIncomesController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const deleteIncomesUseCase = container.resolve(DeleteIncomesUseCase);
      const data = await deleteIncomesUseCase.execute({
         id,
      });

      return response.status(201).send(data);
   }
}

export { DeleteIncomesController };
