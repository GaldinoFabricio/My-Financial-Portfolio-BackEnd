import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
   async handle(
      request: Request<
         any,
         any,
         {
            name: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { name } = request.body;

      const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
      const data = await createCategoryUseCase.execute({ name });

      return response.status(201).send(data);
   }
}

export { CreateCategoryController };
