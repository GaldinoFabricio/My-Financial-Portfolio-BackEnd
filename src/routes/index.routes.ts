import { Router } from "express";

import { userRoutes } from "./user.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { investmentRoutes } from "./investment.routes";
import { stockRoutes } from "./stock.routes";
import { recommededStockRoutes } from "./recommededStock.routes";
import { groupRoleRoutes } from "./groupRole.routes";
import { roleRoutes } from "./role.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/investment", investmentRoutes);
routes.use("/stock", stockRoutes);
routes.use("/recommeded-stock", recommededStockRoutes);
routes.use("/group-role", groupRoleRoutes);
routes.use("/role", roleRoutes);
routes.use(authenticateRoutes);

export { routes };
