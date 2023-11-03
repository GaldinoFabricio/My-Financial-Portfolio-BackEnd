import { Router } from "express";
import { AuthenticateUserController } from "../modules/user/useCase/authenticate/authenticateUserController";
import { CreateUserController } from "../modules/user/useCase/create/CreateUserController";
import { Joi, Segments, celebrate } from "celebrate";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

authenticateRoutes.post(
	"/session",
	celebrate(
		{
			[Segments.BODY]: Joi.object().keys({
				email: Joi.string().required(),
				password: Joi.string().required(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	authenticateUserController.handle
);

authenticateRoutes.post(
	"/create",
	celebrate(
		{
			[Segments.PARAMS]: Joi.object().keys({
				name: Joi.string().required(),
				email: Joi.string().required(),
				password: Joi.string().required(),
			}),
		},
		{
			allowUnknown: false,
		}
	),
	createUserController.handle
);

export { authenticateRoutes };
