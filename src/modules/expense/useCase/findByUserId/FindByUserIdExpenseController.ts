import { Request, Response } from "express";
import { FindByUserIdExpenseUseCase } from "./FindByUserIdExpenseUseCase";
import { endOfMonth, isValid, parseISO, startOfMonth } from "date-fns";
import { ExpenseRepository } from "../../repositorie/implemantion/ExpenseRepository";
import { UserRepository } from "../../../user/repositore/implemantion/UserRepository";

class FindByUserIdExpenseController {
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
      const { user_id } = request.params;
      const { page, pageSize } = request.query;

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

      const findByUserIdExpenseUseCase = new FindByUserIdExpenseUseCase(
         new ExpenseRepository(),
         new UserRepository()
      );
      const data = await findByUserIdExpenseUseCase.execute({
         user_id,
         page,
         pageSize,
         final_date,
         intial_date,
      });

      return response.status(200).json(data);
   }
}

export { FindByUserIdExpenseController };
