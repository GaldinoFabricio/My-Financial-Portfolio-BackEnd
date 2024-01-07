import { inject, injectable } from "tsyringe";
import { IExpenseCategoryTableRepository } from "../../repositores/IExpenseCategoryTableRepository";
import { IUpdatePaymentDateExpenseCategoryTableDTO } from "../../dto/IUpdatePaymentDateExpenseCategoryTableDTO";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdatePaymentDateExpenseCategoryTableUseCase {
   constructor(
      @inject("ExpenseCategoryTableRepository")
      private expenseCategoryTableRepository: IExpenseCategoryTableRepository
   ) {}

   async execute(
      input: IUpdatePaymentDateExpenseCategoryTableDTO
   ): Promise<void> {
      const checkExistExpense =
         await this.expenseCategoryTableRepository.findId({ id: input.id });
      if (!checkExistExpense) {
         throw new AppError("Expense not exist", 400);
      }

      await this.expenseCategoryTableRepository.updatePaymentDate(input);
   }
}

export { UpdatePaymentDateExpenseCategoryTableUseCase };
