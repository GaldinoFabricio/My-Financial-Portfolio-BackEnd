import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindMyUserUseCase } from "./FindMyUserUseCase";

class FindMyUserController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.user;

      const findMyUserUseCase = container.resolve(FindMyUserUseCase);
      const data = await findMyUserUseCase.execute({ id });

      return response.status(200).send(data);
   }
}

export { FindMyUserController };
