import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateInvestmentUseCase } from "./CreateInvestmentUseCase";

class CreateInvestmentController {
	async handle(request: Request, response: Response): Promise<Response> {
		const data = request.body;

		const createInvestmentUseCase = container.resolve(
			CreateInvestmentUseCase
		);

		await createInvestmentUseCase.execute(data);

		return response.status(201).send();
	}
}

export { CreateInvestmentController };
