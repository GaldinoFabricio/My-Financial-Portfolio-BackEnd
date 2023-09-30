import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
   async handle(request: Request, response: Response): Promise<Response> {
      const data = request.body;

      const updateUserUseCase = container.resolve(UpdateUserUseCase);

      const resp = updateUserUseCase.execute(data);

      return response.status(201).send(resp);
   }
}

export { UpdateUserController }
