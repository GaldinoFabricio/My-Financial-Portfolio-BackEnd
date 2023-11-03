import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserBankUseCase } from "./CreateUserBankUseCase";

class CreateUserBankController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { user_id, bank_id } = request.body;

		const createUserBankUseCase = container.resolve(CreateUserBankUseCase);

		await createUserBankUseCase.execute({ bank_id, user_id });

		return response.status(201).send();
	}
}

export { CreateUserBankController };
