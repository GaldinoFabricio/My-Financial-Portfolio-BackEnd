import { Request, Response } from "express";
import { container } from "tsyringe";
import { LogicalDeleteBankUseCase } from "./LogicalDeleteBankUseCase";

class LogicalDeleteBankController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const logicalDeleteBankUseCase = container.resolve(
         LogicalDeleteBankUseCase
      );
      const data = await logicalDeleteBankUseCase.execute({ id });

      return response.status(201).send(data);
   }
}

export { LogicalDeleteBankController };
