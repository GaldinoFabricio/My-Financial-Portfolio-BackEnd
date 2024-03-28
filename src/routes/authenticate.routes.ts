import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import { UserController } from "../modules/user/controller/UserController";

const authenticateRoutes = Router();

const userController = new UserController();

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
   userController.authenticate
);

authenticateRoutes.post(
   "/create",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   userController.create
);

export { authenticateRoutes };
