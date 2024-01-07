import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserBankIdInvestmentUseCase } from "./UpdateUserBankIdInvestmentUseCase";

class UpdateUserBankIdInvestmentController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id, user_bank_id } = request.body;

		const updateUserBankIdInvestmentUseCase = container.resolve(
			UpdateUserBankIdInvestmentUseCase
		);

		const data = await updateUserBankIdInvestmentUseCase.execute({
			id,
			user_bank_id,
		});

		return response.status(201).send(data);
	}
}

export { UpdateUserBankIdInvestmentController };
