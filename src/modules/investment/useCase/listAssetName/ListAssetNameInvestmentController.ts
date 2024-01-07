import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAssetNameInvestmentUseCase } from "./ListAssetNameInvestmentUseCase";

class ListAssetNameInvestmentController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { asset_name } = request.body;

		const listAssetNameInvestmentUseCase = container.resolve(
			ListAssetNameInvestmentUseCase
		);

		const data = await listAssetNameInvestmentUseCase.execute({ asset_name });

		return response.status(200).send(data);
	}
}

export { ListAssetNameInvestmentController };
