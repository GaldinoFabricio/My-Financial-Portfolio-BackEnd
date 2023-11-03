import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListIdInvestmentUseCase } from "./ListIdInvestmentUseCase";

class ListIdInvestmentController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const listIdInvestmentUseCase = container.resolve(
			ListIdInvestmentUseCase
		);

		const data = await listIdInvestmentUseCase.execute({ id });

		return response.status(200).send(data);
	}
}

export { ListIdInvestmentController };
