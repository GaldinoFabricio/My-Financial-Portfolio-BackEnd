import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateGroupRoleUseCase } from "./UpdateGroupRoleUseCase";

class UpdateGroupRoleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id, role_id, user_id } = request.body;

		const updateGroupRoleUseCase = container.resolve(UpdateGroupRoleUseCase);
		const data = await updateGroupRoleUseCase.execute({
			id,
			role_id,
			user_id,
		});

		return response.status(201).send(data);
	}
}

export { UpdateGroupRoleController };
