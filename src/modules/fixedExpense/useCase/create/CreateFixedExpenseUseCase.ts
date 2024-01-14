import { inject, injectable } from "tsyringe";
import { IFixedExpenseRepository } from "../../repositores/IFixedExpenseRepository";
import { ICreateFixedExpenseDTO } from "../../dto/ICreateFixedExpenseDTO";
import { FixedExpenses } from "@prisma/client";

@injectable()
class CreateFixedExpenseUseCase {
   constructor(
      @inject("FixedExpenseRepository")
      private fixedExpenseRepository: IFixedExpenseRepository
   ) {}

   async execute(input: ICreateFixedExpenseDTO): Promise<FixedExpenses> {
      return await this.fixedExpenseRepository.create(input);
   }
}

export { CreateFixedExpenseUseCase };
