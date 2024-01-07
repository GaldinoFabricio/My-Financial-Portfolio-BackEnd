import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserIdExpenseCategoryTableUseCase } from "./FindUserIdExpenseCategoryTableUseCase";
import { format } from "date-fns";

class FindUserIdExpenseCategoryTableController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;
      let { month } = request.query;
      if (typeof month === "undefined") {
         month = format(new Date(), "MM/yyyy");
      }

      const findUserIdExpenseCategoryTableUseCase = container.resolve(
         FindUserIdExpenseCategoryTableUseCase
      );
      const data = await findUserIdExpenseCategoryTableUseCase.execute({
         user_id: id,
         month: month.toString(),
      });

      return response.status(200).send(data);
   }
}

export { FindUserIdExpenseCategoryTableController };
