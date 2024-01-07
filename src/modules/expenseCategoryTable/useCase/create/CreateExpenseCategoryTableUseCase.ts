import { inject, injectable } from "tsyringe";
import { IExpenseCategoryTableRepository } from "../../repositores/IExpenseCategoryTableRepository";
import { ICreateExpenseCategoryTableDTO } from "../../dto/ICreateExpenseCategoryTableDTO";
import { ExpenseCategoryTable } from "@prisma/client";

@injectable()
class CreateExpenseCategoryTableUseCase {
   constructor(
      @inject("ExpenseCategoryTableRepository")
      private expenseCategoryTableRepository: IExpenseCategoryTableRepository
   ) {}

   async execute(
      input: ICreateExpenseCategoryTableDTO
   ): Promise<ExpenseCategoryTable> {
      return await this.expenseCategoryTableRepository.create(input);
   }
}

export { CreateExpenseCategoryTableUseCase };
