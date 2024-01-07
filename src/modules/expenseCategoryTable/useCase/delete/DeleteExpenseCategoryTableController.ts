import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteExpenseCategoryTableUseCase } from "./DeleteExpenseCategoryTableUseCase";

class DeleteExpenseCategoryTableController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const deleteExpenseCategoryTableUseCase = container.resolve(
         DeleteExpenseCategoryTableUseCase
      );
      await deleteExpenseCategoryTableUseCase.execute({ id });

      return response.status(201).send();
   }
}

export { DeleteExpenseCategoryTableController };
