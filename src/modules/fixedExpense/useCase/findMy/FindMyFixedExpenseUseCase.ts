import { inject, injectable } from "tsyringe";
import { IFixedExpenseRepository } from "../../repositores/IFixedExpenseRepository";
import { FixedExpenses } from "@prisma/client";
import { IFindUserIdFixedExpenseDTO } from "../../dto/IFindUserIdFixedExpenseDTO";

@injectable()
class FindMyFixedExpenseUseCase {
   constructor(
      @inject("FixedExpenseRepository")
      private expenseCategoryTableRepository: IFixedExpenseRepository
   ) {}

   async execute(input: IFindUserIdFixedExpenseDTO): Promise<FixedExpenses[]> {
      return await this.expenseCategoryTableRepository.findUser(input);
   }
}

export { FindMyFixedExpenseUseCase };
