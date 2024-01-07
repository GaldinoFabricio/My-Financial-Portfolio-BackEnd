import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateRoleUseCase } from "./UpdateRoleUseCase";

class UpdateRoleController {
   async handle(
      request: Request<any, any, { id: string; name: string }>,
      response: Response
   ): Promise<Response> {
      const { id, name } = request.body;

      const updateRoleUseCase = container.resolve(UpdateRoleUseCase);
      const data = await updateRoleUseCase.execute({ id, name });

      return response.status(201).send(data);
   }
}

export { UpdateRoleController };
