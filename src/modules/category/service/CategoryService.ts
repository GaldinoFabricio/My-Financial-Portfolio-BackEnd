import { Category } from "@prisma/client";
import { ICreateCategoryDTO } from "../dto/ICreateCategoryDTO";
import { ICategoryService } from "./ICategoryService";
import { prismaClient } from "../../../database";

class CategoryService implements ICategoryService {
   async create(data: ICreateCategoryDTO): Promise<Category> {
      return await prismaClient.category.create({ data });
   }

   findAll(): Promise<
      {
         id: string;
         name: string;
         deleted: boolean | null;
         created_at: Date;
         updated_at: Date;
         deleted_at: Date | null;
      }[]
   > {
      return prismaClient.category.findMany();
   }

   findById(id: string): Promise<{
      id: string;
      name: string;
      deleted: boolean | null;
      created_at: Date;
      updated_at: Date;
      deleted_at: Date | null;
   } | null> {
      return prismaClient.category.findUnique({ where: { id } });
   }

   findByName(name: string): Promise<{
      id: string;
      name: string;
      deleted: boolean | null;
      created_at: Date;
      updated_at: Date;
      deleted_at: Date | null;
   } | null> {
      return prismaClient.category.findFirst({ where: { name } });
   }

   update(
      id: string,
      name: string
   ): Promise<{
      id: string;
      name: string;
      deleted: boolean | null;
      created_at: Date;
      updated_at: Date;
      deleted_at: Date | null;
   }> {
      return prismaClient.category.update({ where: { id }, data: { name } });
   }
}

export { CategoryService };
