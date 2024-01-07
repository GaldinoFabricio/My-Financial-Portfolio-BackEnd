import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateExpenseCategoryTableUseCase } from "./CreateExpenseCategoryTableUseCase";

class CreateExpenseCategoryTableController {
   async handle(
      request: Request<
         any,
         any,
         {
            category_id: string;
            monthly_budget: number;
            month: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id } = request.user;
      const { category_id, month, monthly_budget } = request.body;

      const createExpenseCategoryTableUseCase = container.resolve(
         CreateExpenseCategoryTableUseCase
      );
      const data = await createExpenseCategoryTableUseCase.execute({
         category_id,
         month,
         monthly_budget,
         user_id: id,
      });

      return response.status(201).send(data);
   }
}

export { CreateExpenseCategoryTableController };
