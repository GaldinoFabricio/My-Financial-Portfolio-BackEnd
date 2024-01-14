import { inject, injectable } from "tsyringe";
import { IIncomesRepository } from "../../repositories/IIncomesRepository";
import { ICreateIncomesDTO } from "../../dto/ICreateIncomesDTO";
import { Incomes } from "@prisma/client";

@injectable()
class CreateIncomesUseCase {
   constructor(
      @inject("IncomesRepository") private incomesRepository: IIncomesRepository
   ) {}

   async execute(input: ICreateIncomesDTO): Promise<Incomes> {
      return await this.incomesRepository.create(input);
   }
}

export { CreateIncomesUseCase };
