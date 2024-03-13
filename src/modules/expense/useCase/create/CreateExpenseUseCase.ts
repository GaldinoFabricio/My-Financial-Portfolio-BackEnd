import { Expenses } from "@prisma/client";
import { ICreateExpenseDTO } from "../../dto/ICreateExpenseDTO";
import { ExpenseRepository } from "../../repositorie/implemantion/ExpenseRepository";
import { IBankRepository } from "../../../bank/repositorie/IBankRepository";

class CreateExpenseUseCase {
   constructor(
      private expenseRepository: ExpenseRepository,
      private bankRepository: IBankRepository
   ) {}

   async execute(expense: ICreateExpenseDTO): Promise<Expenses> {
      return await this.expenseRepository.create(expense);
   }
}

export { CreateExpenseUseCase };
