import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserIdUserBankUseCase } from "./ListUserIdUserBankUseCase";

class ListUserIdUserBankController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.user;

		const listUserIdUserBankUseCase = container.resolve(
			ListUserIdUserBankUseCase
		);
		const data = await listUserIdUserBankUseCase.execute({ user_id: id });

		return response.status(200).send(data);
	}
}

export { ListUserIdUserBankController };
