import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { ILogicalDeleteCategoryDTO } from "../../dto/ILogicalDeleteCategoryDTO";
import { Category } from "@prisma/client";

@injectable()
class LogicalDeleteCategoryUseCase {
   constructor(
      @inject("CategoryRepository")
      private categoryRepository: ICategoryRepository
   ) {}

   async execute(input: ILogicalDeleteCategoryDTO): Promise<Category> {
      return await this.categoryRepository.logicalDelete(input);
   }
}

export { LogicalDeleteCategoryUseCase };
