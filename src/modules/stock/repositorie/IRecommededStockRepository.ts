import { RecommendedStock } from "@prisma/client";
import { ICreateRecommendedStockDTO } from "../dto/recommendedStock/ICreateRecommededStockDTO";
import { IListIdRecommededStockDTO } from "../dto/recommendedStock/IListIdRecommededStockDTO";
import { IListStockIdRecommededStockDTO } from "../dto/recommendedStock/IListStockIdRecommededStockDTO";
import { IUpdateRecommededStockDTO } from "../dto/recommendedStock/IUpdateRecommededStockDTO";
import { IListUserIdRecommededStockDTO } from "../dto/recommendedStock/IListUserIdRecommededStockDTO";

interface IRecommededStockRepository {
	create(data: ICreateRecommendedStockDTO): Promise<void>;

	list(): Promise<RecommendedStock[]>;

	listId({ id }: IListIdRecommededStockDTO): Promise<RecommendedStock | null>;

	listStockId({
		stock_id,
	}: IListStockIdRecommededStockDTO): Promise<RecommendedStock[]>;

	listUserId({
		user_id,
	}: IListUserIdRecommededStockDTO): Promise<RecommendedStock[]>;

	update({
		id,
		justification,
		stock_id,
	}: IUpdateRecommededStockDTO): Promise<RecommendedStock>;
}

export { IRecommededStockRepository };
