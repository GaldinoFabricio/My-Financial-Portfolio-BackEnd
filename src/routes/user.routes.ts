import { Router } from "express";
import { Joi, Segments, celebrate } from "celebrate";
import { ensureAuthenticate } from "../middleware/ensureAuthenticate";
import { UserController } from "../modules/user/controller/UserController";

const userRoutes = Router();

const userController = new UserController();
userRoutes.use(ensureAuthenticate);

userRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   userController.create
);

userRoutes.get(
   "/:id",
   celebrate(
      {
         [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   userController.findId
);

userRoutes.get("/", userController.findMy);

userRoutes.put(
   "/password",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            password: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   userController.updatePassword
);

userRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   userController.update
);

export { userRoutes };
