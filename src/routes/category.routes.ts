import { Router } from "express";
import { CategoryController } from "../modules/category/controller/CategoryController";
import { Joi, Segments, celebrate } from "celebrate";

const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.post(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   categoryController.create
);

categoryRoutes.get("/", categoryController.list);

categoryRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().uuid().required(),
            name: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   categoryController.update
);

export { categoryRoutes };
