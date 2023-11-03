import { Router } from "express";
import { CreateRecommededStockControler } from "../modules/stock/useCase/recommededStock/create/CreateRecommededStockController";
import { ListUserIdRecommededStockController } from "../modules/stock/useCase/recommededStock/listUserId/ListUseIdRecommededStockController";
import { ListMyRecommededStockController } from "../modules/stock/useCase/recommededStock/listMy/ListMyRecommededStockController";

const recommededStockRoutes = Router();

const createRecommededStockController = new CreateRecommededStockControler();
const listMyRecommededStockController = new ListMyRecommededStockController();
const listUserIdRecommmededStockController =
	new ListUserIdRecommededStockController();

recommededStockRoutes.post("/", createRecommededStockController.handle);

recommededStockRoutes.get("/my", listMyRecommededStockController.handle);

recommededStockRoutes.get(
	"/user/:user_id",
	listUserIdRecommmededStockController.handle
);

export { recommededStockRoutes };
