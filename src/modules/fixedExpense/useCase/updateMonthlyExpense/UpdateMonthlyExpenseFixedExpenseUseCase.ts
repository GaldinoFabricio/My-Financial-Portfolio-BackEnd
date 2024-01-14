import { inject, injectable } from "tsyringe";
import { FixedExpenses } from "@prisma/client";
import { IFixedExpenseRepository } from "../../repositores/IFixedExpenseRepository";
import { IUpdateMonthlyExpenseFixedExpenseDTO } from "../../dto/IUpdateMonthlyExpenseFixedExpenseDTO";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdateMonthlyExpenseFixedExpenseUseCase {
   constructor(
      @inject("FixedExpenseRepository")
      private fixedExpenseRepository: IFixedExpenseRepository
   ) {}

   async execute(
      input: IUpdateMonthlyExpenseFixedExpenseDTO
   ): Promise<FixedExpenses> {
      const checkExistExpense = await this.fixedExpenseRepository.findId({
         id: input.id,
      });
      if (!checkExistExpense) {
         throw new AppError("Expense not exist", 400);
      }

      return await this.fixedExpenseRepository.updateMonthlyExpense(input);
   }
}

export { UpdateMonthlyExpenseFixedExpenseUseCase };
