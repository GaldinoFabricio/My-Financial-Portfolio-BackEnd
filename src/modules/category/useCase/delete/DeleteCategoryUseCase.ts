import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { IDeleteCategoryDTO } from "../../dto/IDeleteCategoryDTO";

@injectable()
class DeleteCategoryUseCase {
   constructor(
      @inject("CategoryRepository")
      private categoryRepository: ICategoryRepository
   ) {}

   async execute(input: IDeleteCategoryDTO): Promise<void> {
      await this.categoryRepository.delete(input);
   }
}

export { DeleteCategoryUseCase };
