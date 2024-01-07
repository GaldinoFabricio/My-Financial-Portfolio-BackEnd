import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);
      await deleteCategoryUseCase.execute({ id });

      return response.status(201).send();
   }
}

export { DeleteCategoryController };
