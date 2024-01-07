import { inject, injectable } from "tsyringe";
import { IExpenseCategoryTableRepository } from "../../repositores/IExpenseCategoryTableRepository";
import { ExpenseCategoryTable } from "@prisma/client";
import { IFindUserIdExpenseCategoryTableDTO } from "../../dto/IFindUserIdExpenseCategoryTableDTO";

@injectable()
class FindMyExpenseCategoryTableUseCase {
   constructor(
      @inject("ExpenseCategoryTableRepository")
      private expenseCategoryTableRepository: IExpenseCategoryTableRepository
   ) {}

   async execute(
      input: IFindUserIdExpenseCategoryTableDTO
   ): Promise<ExpenseCategoryTable[]> {
      return await this.expenseCategoryTableRepository.findUser(input);
   }
}

export { FindMyExpenseCategoryTableUseCase };
