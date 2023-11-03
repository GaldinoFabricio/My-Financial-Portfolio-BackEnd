import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRoleIdGroupRoleUseCase } from "./ListRoleIdGroupRoleUseCase";

class ListRoleIdGroupRoleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { role_id } = request.params;

		const listRoleIdGroupRoleUseCase = container.resolve(
			ListRoleIdGroupRoleUseCase
		);
		const data = await listRoleIdGroupRoleUseCase.execute({ role_id });

		return response.status(200).send(data);
	}
}

export { ListRoleIdGroupRoleController };
