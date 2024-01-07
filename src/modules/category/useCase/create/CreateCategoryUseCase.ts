import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { ICreateCategoryDTO } from "../../dto/ICreateCategoryDTO";
import { Category } from "@prisma/client";

@injectable()
class CreateCategoryUseCase {
   constructor(
      @inject("CategoryRepository")
      private categoryRepository: ICategoryRepository
   ) {}

   async execute(input: ICreateCategoryDTO): Promise<Category> {
      return await this.categoryRepository.create(input);
   }
}

export { CreateCategoryUseCase };
