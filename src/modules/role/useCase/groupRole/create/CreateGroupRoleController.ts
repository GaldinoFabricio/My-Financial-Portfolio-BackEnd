import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGroupRoleUseCase } from "./CreateGroupRoleUseCase";

class CreateGroupRoleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { role_id, user_id } = request.body;

		const createGroupRoleUseCase = container.resolve(CreateGroupRoleUseCase);
		await createGroupRoleUseCase.execute({ role_id, user_id });

		return response.status(201).send();
	}
}

export { CreateGroupRoleController };
