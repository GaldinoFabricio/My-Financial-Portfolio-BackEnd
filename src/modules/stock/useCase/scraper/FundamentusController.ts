import { Request, Response } from "express";
import fundamentus from "../../../../helpers/fundamentus";

class FundamentusController {
	async handle(request: Request, response: Response): Promise<Response> {
		await fundamentus();

		return response.status(200).send();
	}
}

export { FundamentusController };
