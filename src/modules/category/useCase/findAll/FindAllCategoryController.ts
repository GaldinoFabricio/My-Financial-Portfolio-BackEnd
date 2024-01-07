import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllCategoryUseCase } from "./FindAllCategoryUseCase";

class FindAllCategoryController {
   async handle(request: Request, response: Response): Promise<Response> {
      const findAllCategoryUseCase = container.resolve(FindAllCategoryUseCase);
      const data = await findAllCategoryUseCase.execute();

      return response.status(200).send(data);
   }
}

export { FindAllCategoryController };
