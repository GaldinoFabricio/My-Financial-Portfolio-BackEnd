import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteFixedExpenseUseCase } from "./DeleteFixedExpenseUseCase";

class DeleteFixedExpenseController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const deleteFixedExpenseUseCase = container.resolve(
         DeleteFixedExpenseUseCase
      );
      const data = await deleteFixedExpenseUseCase.execute({ id });

      return response.status(201).send(data);
   }
}

export { DeleteFixedExpenseController };
