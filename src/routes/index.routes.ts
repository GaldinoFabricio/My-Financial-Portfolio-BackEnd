import { Router } from "express";
import { userRoutes } from "./user.routes";
import { expenseRoutes } from "./expense.routes";
import { categoryRoutes } from "./category.routes";
import { authenticateRoutes } from "./authenticate.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/expense", expenseRoutes);
routes.use("/category", categoryRoutes);
routes.use("/", authenticateRoutes);

export { routes };
