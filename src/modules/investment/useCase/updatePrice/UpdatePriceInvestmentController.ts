import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdatePriceInvestmentUseCase } from "./UpdatePriceInvestmentUseCase";

class UpdatePriceInvestmentController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id, price } = request.body;

		const updatePriceInvestmentUseCase = container.resolve(
			UpdatePriceInvestmentUseCase
		);

		const data = await updatePriceInvestmentUseCase.execute({
			id,
			price,
		});

		return response.status(201).send(data);
	}
}

export { UpdatePriceInvestmentController };
