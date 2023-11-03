import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserIdRecommededStockUseCase } from "./ListUseIdRecommededStockUseCase";

class ListUserIdRecommededStockController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { user_id } = request.params;

		const listUserIdRecommededStockUseCase = container.resolve(
			ListUserIdRecommededStockUseCase
		);
		const data = await listUserIdRecommededStockUseCase.execute({
			user_id,
		});

		return response.status(200).send(data);
	}
}

export { ListUserIdRecommededStockController };
