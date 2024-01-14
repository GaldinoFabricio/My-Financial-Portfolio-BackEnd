import { inject, injectable } from "tsyringe";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";
import { IDeleteIncomesDTO } from "../../dto/IDeleteIncomesDTO";
import { Incomes } from "@prisma/client";

@injectable()
class DeleteIncomesUseCase {
   constructor(
      @inject("IncomesRepository")
      private incomesRepository: IIncomesRepository
   ) {}

   async execute(input: IDeleteIncomesDTO): Promise<Incomes> {
      return await this.incomesRepository.delete(input);
   }
}

export { DeleteIncomesUseCase };
