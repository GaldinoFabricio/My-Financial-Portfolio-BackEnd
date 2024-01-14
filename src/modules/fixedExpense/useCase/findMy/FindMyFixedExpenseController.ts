import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindMyFixedExpenseUseCase } from "./FindMyFixedExpenseUseCase";
import { format } from "date-fns";

class FindMyFixedExpenseController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.user;
      let { month } = request.query;
      if (typeof month === "undefined") {
         month = format(new Date(), "MM/yyyy");
      }

      const findMyFixedExpenseUseCase = container.resolve(
         FindMyFixedExpenseUseCase
      );
      const data = await findMyFixedExpenseUseCase.execute({
         user_id: id,
         month: month.toString(),
      });

      return response.status(200).send(data);
   }
}

export { FindMyFixedExpenseController };
