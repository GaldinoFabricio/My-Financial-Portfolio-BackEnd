import { Category } from "@prisma/client";
import { ICreateCategoryDTO } from "../../dto/ICreateCategoryDTO";
import { ICategoryRepository } from "../ICategoryRepository";
import { prismaClient } from "../../../../database";
import { IDeleteCategoryDTO } from "../../dto/IDeleteCategoryDTO";
import { IFindIdCategoryDTO } from "../../dto/IFindIdCategoryDTO";
import { IFindNameCategoryDTO } from "../../dto/IFindNameCategoryDTO";
import { ILogicalDeleteCategoryDTO } from "../../dto/ILogicalDeleteCategoryDTO";
import { IUpdateCategoryDTO } from "../../dto/IUpdateCategoryDTO";

class CategoryRepository implements ICategoryRepository {
   async create(input: ICreateCategoryDTO): Promise<Category> {
      return await prismaClient.category.create({ data: input });
   }

   async delete(input: IDeleteCategoryDTO): Promise<void> {
      await prismaClient.category.delete({ where: { id: input.id } });
   }

   async findAll(): Promise<Category[]> {
      return await prismaClient.category.findMany();
   }

   async findId(input: IFindIdCategoryDTO): Promise<Category | null> {
      return await prismaClient.category.findFirst({ where: { id: input.id } });
   }

   async findName(input: IFindNameCategoryDTO): Promise<Category[]> {
      return await prismaClient.category.findMany({
         where: {
            name: {
               contains: input.name,
            },
         },
      });
   }

   async logicalDelete(input: ILogicalDeleteCategoryDTO): Promise<Category> {
      return await prismaClient.category.update({
         where: {
            id: input.id,
         },
         data: {
            deleted: true,
            deleted_at: new Date(),
         },
      });
   }

   async update(input: IUpdateCategoryDTO): Promise<Category> {
      return await prismaClient.category.update({
         where: {
            id: input.id,
         },
         data: {
            name: input.name,
         },
      });
   }
}

export { CategoryRepository };
