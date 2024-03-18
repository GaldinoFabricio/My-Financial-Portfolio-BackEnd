import { Router } from "express";
import { userRoutes } from "./user.routes";
import { expenseRoutes } from "./expense.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/expense", expenseRoutes);

export { routes };
