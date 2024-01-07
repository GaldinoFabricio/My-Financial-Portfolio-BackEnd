import { inject, injectable } from "tsyringe";
import { IExpenseCategoryTableRepository } from "../../repositores/IExpenseCategoryTableRepository";
import { ILogicalDeleteExpenseCategoryTableDTO } from "../../dto/ILogicalDeleteExpenseCategoryTableDTO";
import { ExpenseCategoryTable } from "@prisma/client";

@injectable()
class LogicalDeleteExpenseCategoryTableUseCase {
   constructor(
      @inject("ExpenseCategoryTableRepository")
      private expenseCategoryTableRepository: IExpenseCategoryTableRepository
   ) {}

   async execute(
      input: ILogicalDeleteExpenseCategoryTableDTO
   ): Promise<ExpenseCategoryTable> {
      return await this.expenseCategoryTableRepository.logicalDelete(input);
   }
}

export { LogicalDeleteExpenseCategoryTableUseCase };
