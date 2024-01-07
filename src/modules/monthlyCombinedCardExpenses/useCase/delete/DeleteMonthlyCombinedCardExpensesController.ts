import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteMonthlyCombinedCardExpensesUseCase } from "./DeleteMonthlyCombinedCardExpensesUseCase";

class DeleteMonthlyCombinedCardExpensesController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const deleteMonthlyCombinedCardExpensesUseCase = container.resolve(
         DeleteMonthlyCombinedCardExpensesUseCase
      );
      await deleteMonthlyCombinedCardExpensesUseCase.execute({ id });

      return response.status(201).send();
   }
}

export { DeleteMonthlyCombinedCardExpensesController };
