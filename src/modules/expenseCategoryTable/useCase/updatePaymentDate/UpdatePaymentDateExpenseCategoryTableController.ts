import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePaymentDateExpenseCategoryTableUseCase } from "./UpdatePaymentDateExpenseCategoryTableUseCase";

class UpdatePaymentDateExpenseCategoryTableController {
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

      const updatePaymentDateExpenseCategoryTableUseCase = container.resolve(
         UpdatePaymentDateExpenseCategoryTableUseCase
      );
      await updatePaymentDateExpenseCategoryTableUseCase.execute({ id });

      return response.status(201).send();
   }
}

export { UpdatePaymentDateExpenseCategoryTableController };
