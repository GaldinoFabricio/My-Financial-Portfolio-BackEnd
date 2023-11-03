import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../../repositorie/IInvestmentRepository";
import { ICreateInvestmentDTO } from "../../../dto/investment/ICreateInvestmentDTO";
import { IUpdateInvestmentDTO } from "../../../dto/investment/IUpdateInvestmentDTO";
import AppError from "../../../../../shared/errors/AppErrors";
import { IUpdateCurrentValueInvestmentDTO } from "../../../dto/investment/IUpdatePriceInvestmentDTO";
import { IUpdateUserBankIdInvestmentDTO } from "../../../dto/investment/IUpdateUserBankIdInvestmentDTO";

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
