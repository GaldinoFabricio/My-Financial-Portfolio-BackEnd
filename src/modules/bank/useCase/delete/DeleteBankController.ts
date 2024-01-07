import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteBankUseCase } from "./DeleteBankUseCase";

class DeleteBankController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const deleteBankUseCase = container.resolve(DeleteBankUseCase);
      await deleteBankUseCase.execute({ id });

      return response.status(201).send();
   }
}

export { DeleteBankController };
