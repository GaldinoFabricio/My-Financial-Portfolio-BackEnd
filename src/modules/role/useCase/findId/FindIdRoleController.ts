import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindIdRoleUseCase } from "./FindIdRoleUseCase";

class FindIdRoleController {
   async handle(
      request: Request<{ id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.params;

      const findIdRoleUseCase = container.resolve(FindIdRoleUseCase);
      const data = await findIdRoleUseCase.execute({ id });

      return response.status(200).send(data);
   }
}

export { FindIdRoleController };
