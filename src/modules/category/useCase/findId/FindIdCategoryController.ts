import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindIdCategoryUseCase } from "./FindIdCategoryUseCase";

class FindIdCategoryController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;

      const findIdCategoryUseCase = container.resolve(FindIdCategoryUseCase);
      const data = await findIdCategoryUseCase.execute({ id });

      return response.status(200).send(data);
   }
}

export { FindIdCategoryController };
