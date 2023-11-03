import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRecommededStockUseCase } from "./CreateRecommededStockUseCase";

class CreateRecommededStockControler {
	async handle(request: Request, response: Response): Promise<Response> {
		const { stock_id, justification } = request.body;

		const createRecommededStockUseCase = container.resolve(
			CreateRecommededStockUseCase
		);

		await createRecommededStockUseCase.execute({ justification, stock_id });

		return response.status(201).send();
	}
}

export { CreateRecommededStockControler };
