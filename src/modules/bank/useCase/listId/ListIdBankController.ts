import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListIdBankUseCase } from "./ListIdBankUseCase";

class ListIdBankController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;

      const listIdBankUseCase = container.resolve(ListIdBankUseCase);

      const data = await listIdBankUseCase.execute({ id });

      return response.status(200).send(data);
   }
}

export { ListIdBankController };
