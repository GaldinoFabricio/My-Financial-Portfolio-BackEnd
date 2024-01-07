import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { Category } from "@prisma/client";

@injectable()
class FindAllCategoryUseCase {
   constructor(
      @inject("CategoryRepository")
      private categoryRepository: ICategoryRepository
   ) {}

   async execute(): Promise<Category[]> {
      return await this.categoryRepository.findAll();
   }
}

export { FindAllCategoryUseCase };
