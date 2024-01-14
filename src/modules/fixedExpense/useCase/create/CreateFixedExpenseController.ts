import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateFixedExpenseUseCase } from "./CreateFixedExpenseUseCase";

class CreateFixedExpenseController {
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

      const createFixedExpenseUseCase = container.resolve(
         CreateFixedExpenseUseCase
      );
      const data = await createFixedExpenseUseCase.execute({
         category_id,
         month,
         monthly_budget,
         user_id: id,
      });

      return response.status(201).send(data);
   }
}

export { CreateFixedExpenseController };
