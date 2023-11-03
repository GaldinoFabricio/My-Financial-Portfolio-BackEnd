import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRoleUseCase } from "./ListRoleUseCase";

class ListRoleController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listRoleUseCase = container.resolve(ListRoleUseCase);
		const data = await listRoleUseCase.execute();

		if (data.length === 0) {
			return response.status(204).send();
		}

		return response.status(200).send(data);
	}
}

export { ListRoleController };
