import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePaymentDateFixedExpenseUseCase } from "./UpdatePaymentDateFixedExpenseUseCase";

class UpdatePaymentDateFixedExpenseController {
   async handle(
      request: Request<
         any,
         any,
         {
            id: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const updatePaymentDateFixedExpenseUseCase = container.resolve(
         UpdatePaymentDateFixedExpenseUseCase
      );
      await updatePaymentDateFixedExpenseUseCase.execute({ id });

      return response.status(201).send();
   }
}

export { UpdatePaymentDateFixedExpenseController };
