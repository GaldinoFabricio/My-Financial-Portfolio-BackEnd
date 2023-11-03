import { inject, injectable } from "tsyringe";
import { IStockRepository } from "../../../repositorie/IStockRepository";
import { StockRepository } from "../../../repositorie/implemantion/StockRepository";
import { stock } from "@prisma/client";

@injectable()
class ListStockUseCase {
	constructor(
		@inject("StockRepository")
		private stockRepository: IStockRepository
	) {}

	async execute(): Promise<stock[]> {
		return await this.stockRepository.filter();
	}
}

export { ListStockUseCase };
