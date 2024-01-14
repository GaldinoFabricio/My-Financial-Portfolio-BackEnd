import { inject, injectable } from "tsyringe";
import { IFixedExpenseRepository } from "../../repositores/IFixedExpenseRepository";
import { IUpdateFixedExpenseDTO } from "../../dto/IUpdateFixedExpenseDTO";
import { FixedExpenses } from "@prisma/client";
import AppError from "../../../../shared/errors/AppErrors";

@injectable()
class UpdateFixedExpenseUseCase {
   constructor(
      @inject("FixedExpenseRepository")
      private fixedExpenseRepository: IFixedExpenseRepository
   ) {}

   async execute(input: IUpdateFixedExpenseDTO): Promise<FixedExpenses> {
      const checkExistExpense = await this.fixedExpenseRepository.findId({
         id: input.id,
      });
      if (!checkExistExpense) {
         throw new AppError("Expense not exist", 400);
      }

      return await this.fixedExpenseRepository.update(input);
   }
}

export { UpdateFixedExpenseUseCase };
