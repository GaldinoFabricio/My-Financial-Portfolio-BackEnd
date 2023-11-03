import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListBankIdUserBankUseCase } from "./ListBankIdUserBankUseCase";

class ListBankIdUserBankController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { bank_id } = request.params;

		const listBankIdUserBankUseCase = container.resolve(
			ListBankIdUserBankUseCase
		);

		const data = await listBankIdUserBankUseCase.execute({ bank_id });

		return response.status(200).send(data);
	}
}

export { ListBankIdUserBankController };
