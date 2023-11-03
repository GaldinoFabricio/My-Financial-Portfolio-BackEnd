import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserIdGroupRoleUseCase } from "./ListUserIdGroupRoleUseCase";

class ListUserIdGroupRoleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { user_id } = request.params;

		const listUserIdGroupRoleUseCase = container.resolve(
			ListUserIdGroupRoleUseCase
		);
		const data = await listUserIdGroupRoleUseCase.execute({ user_id });

		return response.status(200).send(data);
	}
}

export { ListUserIdGroupRoleController };
