import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRecommendedStockUseCase } from "./CreateRecommendedStockUseCase";

class CreateRecommendedStockController {
   async handle(
      request: Request<
         any,
         any,
         {
            stock_id: string;
            user_id: string;
            justification: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { justification, stock_id, user_id } = request.body;

      const createRecommendedStockUseCase = container.resolve(
         CreateRecommendedStockUseCase
      );
      const data = await createRecommendedStockUseCase.execute({
         justification,
         stock_id,
         user_id,
      });

      return response.status(201).send(data);
   }
}

export { CreateRecommendedStockController };
