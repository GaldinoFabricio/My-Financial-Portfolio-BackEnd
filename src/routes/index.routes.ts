import { Router } from "express";

import { userRoutes } from "./user.routes";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { authenticateRoutes } from "./authenticate.routes";

const routes = Router();

routes.use(authenticateRoutes);
routes.use("/user", ensureAuthenticate, userRoutes);

export { routes };
