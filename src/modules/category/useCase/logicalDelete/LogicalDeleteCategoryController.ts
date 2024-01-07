import { Request, Response } from "express";
import { container } from "tsyringe";
import { LogicalDeleteCategoryUseCase } from "./LogicalDeleteCategoryUseCase";

class LogicalDeleteCategoryController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const logicalDeleteCategoryUseCase = container.resolve(
         LogicalDeleteCategoryUseCase
      );
      const data = await logicalDeleteCategoryUseCase.execute({ id });

      return response.status(201).send(data);
   }
}

export { LogicalDeleteCategoryController };
