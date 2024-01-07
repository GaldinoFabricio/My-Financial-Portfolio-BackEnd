import { inject, injectable } from "tsyringe";
import { IExpenseCategoryTableRepository } from "../../repositores/IExpenseCategoryTableRepository";
import { ExpenseCategoryTable } from "@prisma/client";
import AppError from "../../../../shared/errors/AppErrors";
import { IUpdateMonthlyExpenseExpenseCategoryTable } from "../../dto/IUpdateMonthlyExpenseExpenseCategoryTableDTO";

@injectable()
class UpdateMonthlyExpenseExpenseCategoryTableUseCase {
   constructor(
      @inject("ExpenseCategoryTableRepository")
      private expenseCategoryTableRepository: IExpenseCategoryTableRepository
   ) {}

   async execute(
      input: IUpdateMonthlyExpenseExpenseCategoryTable
   ): Promise<ExpenseCategoryTable> {
      const checkExistExpense =
         await this.expenseCategoryTableRepository.findId({ id: input.id });
      if (!checkExistExpense) {
         throw new AppError("Expense not exist", 400);
      }

      return await this.expenseCategoryTableRepository.updateMonthlyExpense(
         input
      );
   }
}

export { UpdateMonthlyExpenseExpenseCategoryTableUseCase };
