import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../repositorie/IInvestmentRepository";
import { Investment } from "@prisma/client";
import { IListAssetNameInvestmentDTO } from "../../dto/IListAssetNameInvestmentDTO";

@injectable()
class ListAssetNameInvestmentUseCase {
   constructor(
      @inject("InvestmentRepository")
      private investmentRepository: IInvestmentRepository
   ) {}

   async execute({
      asset_name,
   }: IListAssetNameInvestmentDTO): Promise<Investment[]> {
      return await this.investmentRepository.listAssetName({ asset_name });
   }
}

export { ListAssetNameInvestmentUseCase };
