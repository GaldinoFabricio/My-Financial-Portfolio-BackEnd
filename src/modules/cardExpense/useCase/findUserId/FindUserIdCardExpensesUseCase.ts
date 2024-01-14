import { inject, injectable } from "tsyringe";
import { ICardExpensesRepository } from "../../repositorie/ICardExpensesRepository";
import { IFindUserIdCardExpensesDTO } from "../../dto/IFindUserIdCardExpensesDTO";
import { CardExpenses } from "@prisma/client";

@injectable()
class FindUserIdCardExpensesUseCase {
   constructor(
      @inject("CardExpensesRepository")
      private monthlyCombinedCardExpensesRepository: ICardExpensesRepository
   ) {}

   async execute(input: IFindUserIdCardExpensesDTO): Promise<CardExpenses[]> {
      return await this.monthlyCombinedCardExpensesRepository.findUserId(input);
   }
}

export { FindUserIdCardExpensesUseCase };
