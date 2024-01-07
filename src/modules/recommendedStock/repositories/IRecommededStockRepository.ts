import { RecommendedStock } from "@prisma/client";
import { ICreateRecommendedStockDTO } from "../dto/ICreateRecommededStockDTO";
import { IListIdRecommededStockDTO } from "../dto/IListIdRecommededStockDTO";
import { IListStockIdRecommededStockDTO } from "../dto/IListStockIdRecommededStockDTO";
import { IUpdateRecommededStockDTO } from "../dto/IUpdateRecommededStockDTO";
import { IListUserIdRecommededStockDTO } from "../dto/IListUserIdRecommededStockDTO";

interface IRecommededStockRepository {
   create(data: ICreateRecommendedStockDTO): Promise<RecommendedStock>;

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
