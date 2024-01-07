import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListIdUserBankUseCase } from "./ListIdUserBankUseCase";

class ListIdUserBankController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const listIdUserBankUseCase = container.resolve(ListIdUserBankUseCase);

		const data = await listIdUserBankUseCase.execute({ id });

		return response.status(200).send(data);
	}
}

export { ListIdUserBankController };
