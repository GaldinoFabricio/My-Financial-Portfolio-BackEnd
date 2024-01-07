import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListInvestmentUseCase } from "./ListInvestmentUseCase";

class ListInvestmentController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listInvestmentUseCase = container.resolve(ListInvestmentUseCase);

		const data = await listInvestmentUseCase.execute();

		return response.status(200).send(data);
	}
}

export { ListInvestmentController };
