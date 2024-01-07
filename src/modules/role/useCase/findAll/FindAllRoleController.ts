import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllRoleUseCase } from "./FindAllRoleUseCase";

class FindAllRoleController {
   async handle(request: Request, response: Response): Promise<Response> {
      const findAllRoleUseCase = container.resolve(FindAllRoleUseCase);
      const data = await findAllRoleUseCase.execute();

      return response.status(200).send(data);
   }
}

export { FindAllRoleController };
