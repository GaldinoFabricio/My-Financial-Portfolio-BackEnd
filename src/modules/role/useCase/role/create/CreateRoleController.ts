import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRoleUseCase } from "./CreateRoleUseCase";

class CreateRoleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { name } = request.body;
		const { id } = request.user;

		const createRoleUseCase = container.resolve(CreateRoleUseCase);
		await createRoleUseCase.execute({ name, user_id: id });

		return response.status(201).send();
	}
}

export { CreateRoleController };
