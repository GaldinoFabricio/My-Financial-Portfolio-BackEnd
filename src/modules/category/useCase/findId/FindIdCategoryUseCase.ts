import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { Category } from "@prisma/client";
import { IFindIdCategoryDTO } from "../../dto/IFindIdCategoryDTO";

@injectable()
class FindIdCategoryUseCase {
   constructor(
      @inject("CategoryRepository")
      private categoryRepository: ICategoryRepository
   ) {}

   async execute(input: IFindIdCategoryDTO): Promise<Category | null> {
      return await this.categoryRepository.findId(input);
   }
}

export { FindIdCategoryUseCase };
