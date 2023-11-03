import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListIdUserUseCase } from "./ListIdUserUseCase";

class ListIdUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const listIdUserUseCase = container.resolve(ListIdUserUseCase);

		const data = await listIdUserUseCase.execute({ id });

		return response.status(200).send(data);
	}
}

export { ListIdUserController };
