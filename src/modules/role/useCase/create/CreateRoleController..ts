import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRoleUseCase } from "./CreateRoleUseCase";

class CreateRoleController {
   async handle(
      request: Request<any, any, { name: string }>,
      response: Response
   ): Promise<Response> {
      const { name } = request.body;

      const createRoleUseCase = container.resolve(CreateRoleUseCase);
      const data = await createRoleUseCase.execute({ name });

      return response.status(201).send(data);
   }
}

export { CreateRoleController };
