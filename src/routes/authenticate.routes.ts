import { Router } from "express";
import { AuthenticateUserController } from "../modules/user/useCase/authenticate/authenticateUserController";
import { CreateUserController } from "../modules/user/useCase/create/CreateUserController";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

authenticateRoutes.post("/session", authenticateUserController.handle);

authenticateRoutes.post("/create", createUserController.handle);

export { authenticateRoutes };
