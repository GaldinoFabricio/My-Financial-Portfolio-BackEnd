import { Router } from "express";

import { userRoutes } from "./user.routes";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { authenticateRoutes } from "./authenticate.routes";
import { investmentRoutes } from "./investment.routes";
import { stockRoutes } from "./stock.routes";
import { recommededStockRoutes } from "./recommededStock.routes";

const routes = Router();

routes.use(authenticateRoutes);
routes.use("/user", userRoutes);
routes.use("/investment", investmentRoutes);
routes.use("/stock", stockRoutes);
routes.use("/recommeded-stock", recommededStockRoutes);

export { routes };
