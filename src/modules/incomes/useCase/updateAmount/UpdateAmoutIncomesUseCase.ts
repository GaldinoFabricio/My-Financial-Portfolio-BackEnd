import { inject, injectable } from "tsyringe";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";
import { Incomes } from "@prisma/client";
import { IUpdateAmountIncomesDTO } from "../../dto/IUpdateAmountIncomesDTO";

@injectable()
class UpdateAmountIncomesUseCase {
   constructor(
      @inject("IncomesRepository")
      private incomesRepository: IIncomesRepository
   ) {}

   async execute(input: IUpdateAmountIncomesDTO): Promise<void> {
      await this.incomesRepository.updateAmount(input);
   }
}

export { UpdateAmountIncomesUseCase };
