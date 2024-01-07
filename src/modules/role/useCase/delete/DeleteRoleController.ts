import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteRoleUseCase } from "./DeleteRoleUseCase";

class DeleteRoleController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const deleteRoleUseCase = container.resolve(DeleteRoleUseCase);
      const data = await deleteRoleUseCase.execute({ id });

      return response.status(201).send();
   }
}

export { DeleteRoleController };
