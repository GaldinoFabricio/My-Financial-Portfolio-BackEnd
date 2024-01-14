import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserIdFixedExpenseUseCase } from "./FindUserIdFixedExpenseUseCase";
import { format } from "date-fns";

class FindUserIdFixedExpenseController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;
      let { month } = request.query;
      if (typeof month === "undefined") {
         month = format(new Date(), "MM/yyyy");
      }

      const findUserIdFixedExpenseUseCase = container.resolve(
         FindUserIdFixedExpenseUseCase
      );
      const data = await findUserIdFixedExpenseUseCase.execute({
         user_id: id,
         month: month.toString(),
      });

      return response.status(200).send(data);
   }
}

export { FindUserIdFixedExpenseController };
