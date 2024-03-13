import { Expenses } from "@prisma/client";
import { IFindByUserIdExpenseDTO } from "../../dto/IFindByUserIdExpenseDTO";
import { ExpenseRepository } from "../../repositorie/implemantion/ExpenseRepository";

class FindMyExpenseUseCase {
   constructor(private expenseRepository: ExpenseRepository) {}

   async execute(input: IFindByUserIdExpenseDTO): Promise<{
      expense: Expenses[];
      totalPages: number;
   }> {
      return this.expenseRepository.findByUserId(input);
   }
}

export { FindMyExpenseUseCase };
