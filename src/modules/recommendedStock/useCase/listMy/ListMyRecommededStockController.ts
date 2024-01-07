import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMyRecommededStockUseCase } from "./ListMyRecommededStockUseCase";

class ListMyRecommededStockController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.user;

		const listMyRecommededStockUseCase = container.resolve(
			ListMyRecommededStockUseCase
		);
		const data = await listMyRecommededStockUseCase.execute({
			user_id: id,
		});

		return response.status(200).send(data);
	}
}

export { ListMyRecommededStockController };
