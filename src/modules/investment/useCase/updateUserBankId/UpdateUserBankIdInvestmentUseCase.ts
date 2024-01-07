import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../repositorie/IInvestmentRepository";
import { ICreateInvestmentDTO } from "../../dto/ICreateInvestmentDTO";
import { IUpdateInvestmentDTO } from "../../dto/IUpdateInvestmentDTO";
import AppError from "../../../../shared/errors/AppErrors";
import { IUpdateCurrentValueInvestmentDTO } from "../../dto/IUpdatePriceInvestmentDTO";
import { IUpdateUserBankIdInvestmentDTO } from "../../dto/IUpdateUserBankIdInvestmentDTO";

@injectable()
class UpdateUserBankIdInvestmentUseCase {
   constructor(
      @inject("InvestmentRepository")
      private investmentRepository: IInvestmentRepository
   ) {}

   async execute({
      id,
      user_bank_id,
   }: IUpdateUserBankIdInvestmentDTO): Promise<void> {
      const checkInvestmentExist = await this.investmentRepository.listId({
         id,
      });

      if (!checkInvestmentExist) {
         throw new AppError("Investment not-exist");
      }

      await this.investmentRepository.updateUserBankId({
         id,
         user_bank_id,
      });
   }
}

export { UpdateUserBankIdInvestmentUseCase };
