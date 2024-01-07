import { Router } from "express";
import { ListMyRecommededStockController } from "../modules/recommendedStock/useCase/listMy/ListMyRecommededStockController";
import { CreateRecommendedStockController } from "../modules/recommendedStock/useCase/create/CreateRecommendedStockController";
import { ListUserIdRecommendedStockController } from "../modules/recommendedStock/useCase/listUserId/ListUserIdRecommendedStockController";

const recommededStockRoutes = Router();

const createRecommededStockController = new CreateRecommendedStockController();
const listMyRecommededStockController = new ListMyRecommededStockController();
const listUserIdRecommmededStockController =
   new ListUserIdRecommendedStockController();

recommededStockRoutes.post("/", createRecommededStockController.handle);

recommededStockRoutes.get("/my", listMyRecommededStockController.handle);

recommededStockRoutes.get(
   "/user/:user_id",
   listUserIdRecommmededStockController.handle
);

export { recommededStockRoutes };
