import { RecommendedStock } from "@prisma/client";
import { prismaClient } from "../../../../database";
import { ICreateRecommendedStockDTO } from "../../dto/recommendedStock/ICreateRecommededStockDTO";
import { IRecommededStockRepository } from "../IRecommededStockRepository";
import { IListIdRecommededStockDTO } from "../../dto/recommendedStock/IListIdRecommededStockDTO";
import { IListStockIdRecommededStockDTO } from "../../dto/recommendedStock/IListStockIdRecommededStockDTO";
import { IUpdateRecommededStockDTO } from "../../dto/recommendedStock/IUpdateRecommededStockDTO";
import { IListUserIdRecommededStockDTO } from "../../dto/recommendedStock/IListUserIdRecommededStockDTO";

class RecommendedStockRepository implements IRecommededStockRepository {
	async create(data: ICreateRecommendedStockDTO): Promise<void> {
		await prismaClient.recommendedStock.create({ data });
	}

	async list(): Promise<RecommendedStock[]> {
		return await prismaClient.recommendedStock.findMany();
	}

	async listId({
		id,
	}: IListIdRecommededStockDTO): Promise<RecommendedStock | null> {
		return await prismaClient.recommendedStock.findFirst({
			where: {
				id,
			},
		});
	}

	async listStockId({
		stock_id,
	}: IListStockIdRecommededStockDTO): Promise<RecommendedStock[]> {
		return await prismaClient.recommendedStock.findMany({
			where: {
				stock_id,
			},
		});
	}

	async listUserId({
		user_id,
	}: IListUserIdRecommededStockDTO): Promise<RecommendedStock[]> {
		return await prismaClient.recommendedStock.findMany({
			where: {
				user_id,
			},
		});
	}

	async update({
		id,
		justification,
		stock_id,
	}: IUpdateRecommededStockDTO): Promise<RecommendedStock> {
		return await prismaClient.recommendedStock.update({
			where: {
				id,
			},
			data: {
				justification,
				stock_id,
			},
		});
	}
}

export { RecommendedStockRepository };
