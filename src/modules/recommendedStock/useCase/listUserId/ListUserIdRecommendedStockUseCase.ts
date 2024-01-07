import { inject, injectable } from "tsyringe";
import { IRecommededStockRepository } from "../../repositories/IRecommededStockRepository";
import { RecommendedStock } from "@prisma/client";
import { IListUserIdRecommededStockDTO } from "../../dto/IListUserIdRecommededStockDTO";

@injectable()
class ListUserIdRecommendedStockUseCase {
   constructor(
      @inject("RecommededStockRepository")
      private recommededStockRepository: IRecommededStockRepository
   ) {}

   async execute({
      user_id,
   }: IListUserIdRecommededStockDTO): Promise<RecommendedStock[]> {
      return await this.recommededStockRepository.listUserId({ user_id });
   }
}

export { ListUserIdRecommendedStockUseCase };
