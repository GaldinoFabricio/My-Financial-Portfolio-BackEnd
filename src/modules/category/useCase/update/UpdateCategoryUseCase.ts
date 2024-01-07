import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { IUpdateCategoryDTO } from "../../dto/IUpdateCategoryDTO";
import { Category } from "@prisma/client";

@injectable()
class UpdateCategoryUseCase {
   constructor(
      @inject("CategoryRepository")
      private categoryRepository: ICategoryRepository
   ) {}

   async execute(input: IUpdateCategoryDTO): Promise<Category> {
      return await this.categoryRepository.update(input);
   }
}

export { UpdateCategoryUseCase };
