import { format, subMonths } from "date-fns";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindMyCardExpensesUseCase } from "./FindMyCardExpensesUseCase";

class FindMyMonthlyCombinedCardExpensesController {
   async handle(request: Request, response: Response): Promise<Response> {
      const { id } = request.user;

      let { initial_date } = request.body;
      if (typeof initial_date === "string") {
         initial_date = format(new Date(initial_date), "yyyy-MM-dd 00:00:00");
      }

      let { final_date } = request.body;
      if (typeof final_date === "string") {
         final_date = format(new Date(initial_date), "yyyy-MM-dd 00:00:00");
      }

      const findMyCardExpensesUseCase = container.resolve(
         FindMyCardExpensesUseCase
      );
      const data = await findMyCardExpensesUseCase.execute({
         user_id: id,
         final_date: final_date,
         intial_date: initial_date,
      });

      return response.status(201).send(data);
   }
}

export { FindMyMonthlyCombinedCardExpensesController };
