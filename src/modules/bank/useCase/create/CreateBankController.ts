import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBankUseCase } from "./CreateBankUseCase";

class CreateBankController {
   async handle(
      request: Request<any, any, { name: string }>,
      response: Response
   ): Promise<Response> {
      const { name } = request.body;

      const createBankUseCase = container.resolve(CreateBankUseCase);

      const data = await createBankUseCase.execute({ name });

      return response.status(201).send(data);
   }
}

export { CreateBankController };
