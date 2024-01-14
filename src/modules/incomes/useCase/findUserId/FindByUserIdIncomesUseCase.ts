import { inject, injectable } from "tsyringe";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";
import { Incomes } from "@prisma/client";
import { IFindByUserIdIncomesDTO } from "../../dto/IFindByUserIdIncomesDTO";

@injectable()
class FindByUserIdIncomesUseCase {
   constructor(
      @inject("IncomesRepository")
      private incomesRepository: IIncomesRepository
   ) {}

   async execute(input: IFindByUserIdIncomesDTO): Promise<Incomes[]> {
      return await this.incomesRepository.findByUserId(input);
   }
}

export { FindByUserIdIncomesUseCase };
