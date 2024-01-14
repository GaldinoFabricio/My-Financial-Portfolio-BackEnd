import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCardExpensesUseCase } from "./DeleteCardExpensesUseCase";

class DeleteCardExpensesController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const deleteCardExpensesUseCase = container.resolve(
         DeleteCardExpensesUseCase
      );
      const data = await deleteCardExpensesUseCase.execute({ id });

      return response.status(201).send(data);
   }
}

export { DeleteCardExpensesController };
