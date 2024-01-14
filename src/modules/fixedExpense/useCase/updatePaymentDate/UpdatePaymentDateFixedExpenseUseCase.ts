import { inject, injectable } from "tsyringe";
import { IFixedExpenseRepository } from "../../repositores/IFixedExpenseRepository";
import { IUpdatePaymentDateFixedExpenseDTO } from "../../dto/IUpdatePaymentDateFixedExpenseDTO";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdatePaymentDateFixedExpenseUseCase {
   constructor(
      @inject("FixedExpenseRepository")
      private fixedExpenseRepository: IFixedExpenseRepository
   ) {}

   async execute(input: IUpdatePaymentDateFixedExpenseDTO): Promise<void> {
      const checkExistExpense = await this.fixedExpenseRepository.findId({
         id: input.id,
      });
      if (!checkExistExpense) {
         throw new AppError("Expense not exist", 400);
      }

      await this.fixedExpenseRepository.updatePaymentDate(input);
   }
}

export { UpdatePaymentDateFixedExpenseUseCase };
