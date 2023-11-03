import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateInvestmentUseCase } from "./UpdateInvestmentUseCase";

class UpdateInvestmentController {
	async handle(request: Request, response: Response): Promise<Response> {
		const {
			id,
			asset_name,
			asset_type,
			current_value,
			initial_investment,
			transaction_date,
			user_bank_id,
		} = request.body;

		const updateInvestmentUseCase = container.resolve(
			UpdateInvestmentUseCase
		);

		const data = await updateInvestmentUseCase.execute({
			id,
			asset_name,
			asset_type,
			current_value,
			initial_investment,
			transaction_date,
			user_bank_id,
		});

		return response.status(201).send(data);
	}
}

export { UpdateInvestmentController };
