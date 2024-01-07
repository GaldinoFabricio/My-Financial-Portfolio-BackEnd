import { inject, injectable } from "tsyringe";
import { IExpenseCategoryTableRepository } from "../../repositores/IExpenseCategoryTableRepository";
import { IUpdateExpenseCategoryTableDTO } from "../../dto/IUpdateExpenseCategoryTableDTO";
import { ExpenseCategoryTable } from "@prisma/client";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdateExpenseCategoryTableUseCase {
   constructor(
      @inject("ExpenseCategoryTableRepository")
      private expenseCategoryTableRepository: IExpenseCategoryTableRepository
   ) {}

   async execute(
      input: IUpdateExpenseCategoryTableDTO
   ): Promise<ExpenseCategoryTable> {
      const checkExistExpense =
         await this.expenseCategoryTableRepository.findId({ id: input.id });
      if (!checkExistExpense) {
         throw new AppError("Expense not exist", 400);
      }

      return await this.expenseCategoryTableRepository.update(input);
   }
}

export { UpdateExpenseCategoryTableUseCase };
