import { inject, injectable } from "tsyringe";
import { IRecommededStockRepository } from "../../../repositorie/IRecommededStockRepository";
import { ICreateRecommendedStockDTO } from "../../../dto/recommendedStock/ICreateRecommededStockDTO";
import AppError from "../../../../../shared/errors/AppErrors";
import Logger from "../../../../../shared/logger/Logger";

@injectable()
class CreateRecommededStockUseCase {
	constructor(
		@inject("RecommededStockRepository")
		private recommededStockRepository: IRecommededStockRepository
	) {}

	async execute({
		justification,
		stock_id,
	}: ICreateRecommendedStockDTO): Promise<void> {
		const checkStockExist = await this.recommededStockRepository.listStockId({
			stock_id,
		});
		if (checkStockExist) {
			Logger.warn(`Stock: ${stock_id} exist`);
			throw new AppError("Stock already exist");
		}

		await this.recommededStockRepository.create({ justification, stock_id });
	}
}

export { CreateRecommededStockUseCase };
