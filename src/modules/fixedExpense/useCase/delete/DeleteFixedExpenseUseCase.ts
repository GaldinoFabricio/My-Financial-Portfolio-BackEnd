import { inject, injectable } from "tsyringe";
import { IFixedExpenseRepository } from "../../repositores/IFixedExpenseRepository";
import { IDeleteFixedExpenseDTO } from "../../dto/IDeleteFixedExpenseDTO";
import AppError from "../../../../shared/errors/AppErrors";
import { FixedExpenses } from "@prisma/client";

@injectable()
class DeleteFixedExpenseUseCase {
   constructor(
      @inject("FixedExpenseRepository")
      private fixedExpenseRepository: IFixedExpenseRepository
   ) {}

   async execute(input: IDeleteFixedExpenseDTO): Promise<FixedExpenses> {
      const checkExistExpense = await this.fixedExpenseRepository.findId(input);
      if (!checkExistExpense) {
         throw new AppError("Expense not exist", 400);
      }

      return await this.fixedExpenseRepository.delete(input);
   }
}

export { DeleteFixedExpenseUseCase };
