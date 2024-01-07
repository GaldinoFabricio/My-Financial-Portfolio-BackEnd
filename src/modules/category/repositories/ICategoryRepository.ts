import { Category } from "@prisma/client";
import { ICreateCategoryDTO } from "../dto/ICreateCategoryDTO";
import { IFindIdCategoryDTO } from "../dto/IFindIdCategoryDTO";
import { IFindNameCategoryDTO } from "../dto/IFindNameCategoryDTO";
import { IUpdateCategoryDTO } from "../dto/IUpdateCategoryDTO";
import { IDeleteCategoryDTO } from "../dto/IDeleteCategoryDTO";
import { ILogicalDeleteCategoryDTO } from "../dto/ILogicalDeleteCategoryDTO";

interface ICategoryRepository {
   create(input: ICreateCategoryDTO): Promise<Category>;

   findAll(): Promise<Category[]>;

   findId(input: IFindIdCategoryDTO): Promise<Category | null>;

   findName(input: IFindNameCategoryDTO): Promise<Category[]>;

   update(input: IUpdateCategoryDTO): Promise<Category>;

   delete(input: IDeleteCategoryDTO): Promise<void>;

   logicalDelete(input: ILogicalDeleteCategoryDTO): Promise<Category>;
}

export { ICategoryRepository };
