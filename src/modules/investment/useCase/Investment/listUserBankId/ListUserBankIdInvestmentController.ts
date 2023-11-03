import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserBankIdInvestmentUseCase } from "./ListUserBankIdInvestmentUseCase";

class ListUserBankIdInvestmentController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { user_bank_id } = request.params;

		const listUserBankIdInvestmentUseCase = container.resolve(
			ListUserBankIdInvestmentUseCase
		);

		const data = await listUserBankIdInvestmentUseCase.execute({
			user_bank_id,
		});

		return response.status(200).send(data);
	}
}

export { ListUserBankIdInvestmentController };
