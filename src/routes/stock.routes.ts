import { Router } from "express";
import { FundamentusController } from "../modules/stock/useCase/scraper/FundamentusController";
import { ListStockController } from "../modules/stock/useCase/stock/list/ListStockController";

const stockRoutes = Router();

const fundamentusController = new FundamentusController();
const listStockControler = new ListStockController();

stockRoutes.get("/fundamentus", fundamentusController.handle);

stockRoutes.get("/", listStockControler.handle);

export { stockRoutes };
