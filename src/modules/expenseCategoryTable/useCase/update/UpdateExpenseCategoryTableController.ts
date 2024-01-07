import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateExpenseCategoryTableUseCase } from "./UpdateExpenseCategoryTableUseCase";

class UpdateExpenseCategoryTableController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
            category_id?: string;
            user_id?: string;
            monthly_budget?: number;
            month?: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id, category_id, month, monthly_budget, user_id } = request.body;

      const updateExpenseCategoryTableUseCase = container.resolve(
         UpdateExpenseCategoryTableUseCase
      );
      const data = await updateExpenseCategoryTableUseCase.execute({
         id,
         category_id,
         month,
         monthly_budget,
         user_id,
      });

      return response.status(201).send(data);
   }
}

export { UpdateExpenseCategoryTableController };
