import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGroupRoleUseCase } from "./ListGroupRoleUseCase";

class ListGroupRoleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listGroupRoleUseCase = container.resolve(ListGroupRoleUseCase);
		const data = await listGroupRoleUseCase.execute();

		return response.status(200).send(data);
	}
}

export { ListGroupRoleController };
