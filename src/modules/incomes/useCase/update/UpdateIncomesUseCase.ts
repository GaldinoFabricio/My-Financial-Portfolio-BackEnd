import { inject, injectable } from "tsyringe";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";
import { Incomes } from "@prisma/client";
import { IUpdateIncomesDTO } from "../../dto/IUpdateIncomesDTO";

@injectable()
class UpdateIncomesUseCase {
   constructor(
      @inject("IncomesRepository")
      private incomesRepository: IIncomesRepository
   ) {}

   async execute(input: IUpdateIncomesDTO): Promise<Incomes> {
      return await this.incomesRepository.update(input);
   }
}

export { UpdateIncomesUseCase };
