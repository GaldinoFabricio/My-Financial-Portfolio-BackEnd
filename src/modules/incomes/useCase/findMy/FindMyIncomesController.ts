import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindMyIncomesUseCase } from "./FindMyIncomesUseCase";

class FindMyIncomesController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.user;

      const findMyIncomesUseCase = container.resolve(FindMyIncomesUseCase);
      const data = await findMyIncomesUseCase.execute({
         user_id: id,
      });

      return response.status(200).send(data);
   }
}

export { FindMyIncomesController };
