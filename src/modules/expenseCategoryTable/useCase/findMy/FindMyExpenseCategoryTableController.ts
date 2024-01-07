import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindMyExpenseCategoryTableUseCase } from "./FindMyExpenseCategoryTableUseCase";
import { format } from "date-fns";

class FindMyExpenseCategoryTableController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.user;
      let { month } = request.query;
      if (typeof month === "undefined") {
         month = format(new Date(), "MM/yyyy");
      }

      const findMyExpenseCategoryTableUseCase = container.resolve(
         FindMyExpenseCategoryTableUseCase
      );
      const data = await findMyExpenseCategoryTableUseCase.execute({
         user_id: id,
         month: month.toString(),
      });

      return response.status(200).send(data);
   }
}

export { FindMyExpenseCategoryTableController };
