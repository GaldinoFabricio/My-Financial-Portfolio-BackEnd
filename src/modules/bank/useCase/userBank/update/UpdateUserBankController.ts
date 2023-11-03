import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserBankUseCase } from "./UpdateUserBankUseCase";

class UpdateUserBankController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id, bank_id, user_id } = request.body;

		const updateUserBankUseCase = container.resolve(UpdateUserBankUseCase);

		const data = await updateUserBankUseCase.execute({
			id,
			bank_id,
			user_id,
		});

		return response.status(201).send(data);
	}
}

export { UpdateUserBankController };
