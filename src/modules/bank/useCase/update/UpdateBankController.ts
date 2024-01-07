import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBankUseCase } from "./UpdateBankUseCase";

class UpdateBankController {
   async handle(
      request: Request<any, any, { id: string; name?: string }>,
      response: Response
   ): Promise<Response> {
      const { id, name } = request.body;

      const updateBankUseCase = container.resolve(UpdateBankUseCase);

      const data = await updateBankUseCase.execute({ id, name });

      return response.status(201).send(data);
   }
}

export { UpdateBankController };
