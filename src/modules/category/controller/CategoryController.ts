import { Request, Response } from "express";
import { CategoryService } from "../service/CategoryService";
import AppError from "../../../shared/errors/AppErrors";

class CategoryController {
   public async create(req: Request, res: Response): Promise<Response> {
      const { name } = req.body;
      const categoryService = new CategoryService();
      const verifyCategory = await categoryService.findByName(name);
      if (verifyCategory) {
         throw new AppError("Category already exists", 400);
      }

      const category = await categoryService.create({ name });
      return res.status(201).json(category);
   }

   public async list(req: Request, res: Response): Promise<Response> {
      const categoryService = new CategoryService();
      const categories = await categoryService.findAll();
      return res.status(200).json(categories);
   }

   public async update(req: Request, res: Response): Promise<Response> {
      const { id } = req.params;
      const { name } = req.body;

      const categoryService = new CategoryService();
      const checkCategory = await categoryService.findById(id);
      if (!checkCategory) {
         throw new AppError("Category not found", 404);
      }

      const category = await categoryService.update(id, name);
      return res.status(200).json(category);
   }
}

export { CategoryController };
