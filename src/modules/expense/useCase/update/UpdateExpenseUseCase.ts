import AppError from "../../../../shared/errors/AppErrors";
import { IUpdateExpenseDTO } from "../../dto/IUpdateExpenseDTO";
import { IExpenseRepository } from "../../repositorie/IExpenseRepository";

class UpdateExpenseUseCase {
   constructor(private expenseRepository: IExpenseRepository) {}

   async execute(input: IUpdateExpenseDTO) {
      const expenseExists = await this.expenseRepository.findById(input.id);
      if (!expenseExists) {
         throw new AppError("Expense not found", 404);
      }

      return this.expenseRepository.update(input);
   }
}

export { UpdateExpenseUseCase };
