import { Router } from "express";
import { CreateCategoryController } from "../modules/category/useCase/create/CreateCategoryController";
import { DeleteCategoryController } from "../modules/category/useCase/delete/DeleteCategoryController";
import { FindAllCategoryController } from "../modules/category/useCase/findAll/FindAllCategoryController";
import { LogicalDeleteCategoryController } from "../modules/category/useCase/logicalDelete/LogicalDeleteCategoryController";
import { UpdateCategoryController } from "../modules/category/useCase/update/UpdateCategoryController";
import { Joi, Segments, celebrate } from "celebrate";

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const findAllCategoryController = new FindAllCategoryController();
const logicalDeleteCategoryController = new LogicalDeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();

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
   createCategoryController.handle
);

categoryRoutes.delete(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   deleteCategoryController.handle
);

categoryRoutes.get("/", findAllCategoryController.handle);

categoryRoutes.delete(
   "/logical",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   logicalDeleteCategoryController.handle
);

categoryRoutes.put(
   "/",
   celebrate(
      {
         [Segments.BODY]: Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.string().required(),
         }),
      },
      {
         allowUnknown: false,
      }
   ),
   updateCategoryController.handle
);

export { categoryRoutes };
