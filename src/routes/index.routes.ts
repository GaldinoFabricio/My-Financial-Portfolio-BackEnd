import { Router } from "express";
import { userRoutes } from "./user.routes";
import { expenseRoutes } from "./expense.routes";
import { categoryRoutes } from "./category.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { salaryReceiptRoutes } from "./salaryReceipt.routes";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/expense", expenseRoutes);
routes.use("/category", categoryRoutes);
routes.use("/salary", salaryReceiptRoutes);
routes.use("/", authenticateRoutes);

export { routes };
