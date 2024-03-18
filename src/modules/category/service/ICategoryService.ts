import { Category } from "@prisma/client";
import { ICreateCategoryDTO } from "../dto/ICreateCategoryDTO";

interface ICategoryService {
   create(data: ICreateCategoryDTO): Promise<Category>;

   findByName(name: string): Promise<Category | null>;

   findById(id: string): Promise<Category | null>;

   findAll(): Promise<Category[]>;

   update(id: string, name: string): Promise<Category>;
}

export { ICategoryService };
