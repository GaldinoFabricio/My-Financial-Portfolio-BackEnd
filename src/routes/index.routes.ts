import { Router } from "express";

import { userRoutes } from "./user.routes";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { authenticateRoutes } from "./authenticate.routes";
import { investmentRoutes } from "./investment.routes";
import { stockRoutes } from "./stock.routes";
import { recommededStockRoutes } from "./recommededStock.routes";
import { expenseCategoryTableRoutes } from "./expenseCategoryTable.routes";
import { categoryRoutes } from "./category.routes";
import { bankRoutes } from "./bank.routes";
import { roleRoutes } from "./role.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/bank", bankRoutes);
routes.use("/investment", investmentRoutes);
routes.use("/stock", stockRoutes);
routes.use("/recommeded-stock", recommededStockRoutes);
routes.use("/expense", expenseCategoryTableRoutes);
routes.use("/category", categoryRoutes);
routes.use("/role", roleRoutes);
routes.use(authenticateRoutes);

export { routes };
