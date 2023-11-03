import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateRoleUseCase } from "./UpdateRoleUseCase";

class UpdateRoleControler {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id, name } = request.body;
		const { user } = request;

		const updateRoleUseCase = container.resolve(UpdateRoleUseCase);
		const data = await updateRoleUseCase.execute({
			id,
			name,
			user_id: user.id,
		});

		return response.status(201).send(data);
	}
}

export { UpdateRoleControler };
