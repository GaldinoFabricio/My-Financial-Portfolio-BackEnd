import { inject, injectable } from "tsyringe";
import { IRecommededStockRepository } from "../../repositories/IRecommededStockRepository";
import { RecommendedStock } from "@prisma/client";
import { ICreateRecommendedStockDTO } from "../../dto/ICreateRecommededStockDTO";

@injectable()
class CreateRecommendedStockUseCase {
   constructor(
      @inject("RecommededStockRepository")
      private recommededStockRepository: IRecommededStockRepository
   ) {}

   async execute(input: ICreateRecommendedStockDTO): Promise<RecommendedStock> {
      return this.recommededStockRepository.create(input);
   }
}

export { CreateRecommendedStockUseCase };
