import { Request, Response } from "express";
import { container } from "tsyringe";
import { LogicalDeleteExpenseCategoryTableUseCase } from "./LogicalDeleteExpenseCategoryTableUseCase";

class LogicalDeleteExpenseCategoryTableController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const logicalDeleteExpenseCategoryTableUseCase = container.resolve(
         LogicalDeleteExpenseCategoryTableUseCase
      );
      const data = await logicalDeleteExpenseCategoryTableUseCase.execute({
         id,
      });

      return response.status(201).send(data);
   }
}

export { LogicalDeleteExpenseCategoryTableController };
