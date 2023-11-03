import { inject, injectable } from "tsyringe";
import { IRecommededStockRepository } from "../../../repositorie/IRecommededStockRepository";
import { RecommendedStock } from "@prisma/client";
import { IListUserIdRecommededStockDTO } from "../../../dto/recommendedStock/IListUserIdRecommededStockDTO";

@injectable()
class ListUserIdRecommededStockUseCase {
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

export { ListUserIdRecommededStockUseCase };
