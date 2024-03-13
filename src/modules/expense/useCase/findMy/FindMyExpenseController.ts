import { Request, Response } from "express";
import { FindMyExpenseUseCase } from "./FindMyExpenseUseCase";
import { endOfMonth, isValid, parseISO, startOfMonth } from "date-fns";
import { end } from "cheerio/lib/api/traversing";
import { ExpenseRepository } from "../../repositorie/implemantion/ExpenseRepository";
import { UserRepository } from "../../../user/repositore/implemantion/UserRepository";

class FindMyExpenseController {
   async handle(
      request: Request<
         any,
         any,
         any,
         {
            page: number;
            pageSize: number;
            start_date?: string;
            end_date?: string;
         }
      >,
      response: Response
   ): Promise<Response> {
      const { page, pageSize } = request.query;
      const { id } = request.user;

      let final_date = endOfMonth(new Date()).toISOString();
      if (
         request.query.start_date &&
         !isValid(parseISO(request.query.start_date))
      ) {
         final_date = request.query.start_date;
      }

      let intial_date = startOfMonth(new Date()).toISOString();
      if (
         request.query.end_date &&
         !isValid(parseISO(request.query.end_date))
      ) {
         intial_date = request.query.end_date;
      }

      const findMyExpenseUseCase = new FindMyExpenseUseCase(
         new ExpenseRepository()
      );
      const expense = await findMyExpenseUseCase.execute({
         user_id: id as string,
         page: Number(page) || 1,
         pageSize: Number(pageSize) || 10,
         final_date,
         intial_date,
      });

      return response.json(expense);
   }
}

export { FindMyExpenseController };
