import { Request, Response } from "express";
import { container } from "tsyringe";
import { LogicalDeleteRoleUseCase } from "./LogicalDeleteRoleUseCase";

class LogicalDeleteRoleController {
   async handle(
      request: Request<any, any, { id: string }>,
      response: Response
   ): Promise<Response> {
      const { id } = request.body;

      const logicalDeleteRoleUseCase = container.resolve(
         LogicalDeleteRoleUseCase
      );
      const data = await logicalDeleteRoleUseCase.execute({ id });

      return response.status(201).send(data);
   }
}

export { LogicalDeleteRoleController };
