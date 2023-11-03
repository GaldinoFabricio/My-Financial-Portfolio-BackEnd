import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMyUserUseCase } from "./ListMyUserUseCase";

class ListMyUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.user;

		const listMyUserUseCase = container.resolve(ListMyUserUseCase);
		const data = await listMyUserUseCase.execute({ id });

		return response.status(200).send(data);
	}
}

export { ListMyUserController };
