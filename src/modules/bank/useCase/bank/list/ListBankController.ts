import { container } from "tsyringe";
import { ListBankUseCase } from "./ListBankUseCase";
import { Request, Response } from "express";

class ListBankController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listBankUseCase = container.resolve(ListBankUseCase);

		const data = await listBankUseCase.execute();

		return response.status(200).send(data);
	}
}

export { ListBankController };
