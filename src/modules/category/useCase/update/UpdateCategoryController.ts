import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryUseCase } from "./UpdateCategoryUseCase";

class UpdateCategoryController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
            name: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id, name } = request.body;

      const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);
      const data = await updateCategoryUseCase.execute({ id, name });

      return response.status(201).send(data);
   }
}

export { UpdateCategoryController };
