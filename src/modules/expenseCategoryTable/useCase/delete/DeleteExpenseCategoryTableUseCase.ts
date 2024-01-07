import { inject, injectable } from "tsyringe";
import { IExpenseCategoryTableRepository } from "../../repositores/IExpenseCategoryTableRepository";
import { IDeleteExpenseCategoryTableDTO } from "../../dto/IDeleteExpenseCategoryTableDTO";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class DeleteExpenseCategoryTableUseCase {
   constructor(
      @inject("ExpenseCategoryTableRepository")
      private expenseCategoryTableRepository: IExpenseCategoryTableRepository
   ) {}

   async execute(input: IDeleteExpenseCategoryTableDTO): Promise<void> {
      const checkExistExpense =
         await this.expenseCategoryTableRepository.findId(input);
      if (!checkExistExpense) {
         throw new AppError("Expense not exist", 400);
      }

      await this.expenseCategoryTableRepository.delete(input);
   }
}

export { DeleteExpenseCategoryTableUseCase };
