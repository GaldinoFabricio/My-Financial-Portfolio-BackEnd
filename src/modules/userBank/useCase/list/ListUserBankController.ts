import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserBankUseCase } from "./ListUserBankUseCase";

class ListUserBankController {
	async handle(request: Request, response: Response): Promise<Response> {
		const listUserBankUseCase = container.resolve(ListUserBankUseCase);

		const data = await listUserBankUseCase.execute();

		return response.status(200).send(data);
	}
}

export { ListUserBankController };
