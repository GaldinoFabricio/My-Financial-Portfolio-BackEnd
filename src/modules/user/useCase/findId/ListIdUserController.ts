import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindIdUserUseCase } from "./FindIdUserUseCase";

class FindIdUserController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;

      const findIdUserUseCase = container.resolve(FindIdUserUseCase);

      const data = await findIdUserUseCase.execute({ id });

      return response.status(200).send(data);
   }
}

export { FindIdUserController };
