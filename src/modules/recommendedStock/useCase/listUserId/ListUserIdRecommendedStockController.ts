import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserIdRecommendedStockUseCase } from "./ListUserIdRecommendedStockUseCase";

class ListUserIdRecommendedStockController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;

      const listUserIdRecommededStockUseCase = container.resolve(
         ListUserIdRecommendedStockUseCase
      );
      const data = await listUserIdRecommededStockUseCase.execute({
         user_id: id,
      });

      return response.status(200).send(data);
   }
}

export { ListUserIdRecommendedStockController };
