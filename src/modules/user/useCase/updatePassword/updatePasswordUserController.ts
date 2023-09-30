import { container } from "tsyringe";
import { UpdatePasswordUserUseCase } from "./updatePasswordUserUseCase";
import { Request, Response } from "express";

class UpdatePasswordUserController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { password } = request.body;

		const { id } = request.user;
		console.log("aaa");
		const updatePasswordUserUseCase = container.resolve(
			UpdatePasswordUserUseCase
		);
		console.log({ id, password });
		const data = await updatePasswordUserUseCase.execute({ id, password });

		return response.status(201).send(data);
	}
}

export { UpdatePasswordUserController };
