import { inject, injectable } from "tsyringe";
import { IFixedExpenseRepository } from "../../repositores/IFixedExpenseRepository";
import { FixedExpenses } from "@prisma/client";
import { IFindUserIdFixedExpenseDTO } from "../../dto/IFindUserIdFixedExpenseDTO";

@injectable()
class FindUserIdFixedExpenseUseCase {
   constructor(
      @inject("FixedExpenseRepository")
      private fixedExpenseRepository: IFixedExpenseRepository
   ) {}

   async execute(input: IFindUserIdFixedExpenseDTO): Promise<FixedExpenses[]> {
      return await this.fixedExpenseRepository.findUser(input);
   }
}

export { FindUserIdFixedExpenseUseCase };
