import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListStockUseCase } from "./LIstStockUseCase";

class ListStockController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listStockUseCase = container.resolve(ListStockUseCase);
		const data = await listStockUseCase.execute();

		return response.status(200).send(data);
	}
}

export { ListStockController };
