import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../../repositorie/IInvestmentRepository";
import { ICreateInvestmentDTO } from "../../../dto/investment/ICreateInvestmentDTO";
import { IUpdateInvestmentDTO } from "../../../dto/investment/IUpdateInvestmentDTO";
import AppError from "../../../../../shared/errors/AppErrors";

@injectable()
class UpdateInvestmentUseCase {
	constructor(
		@inject("InvestmentRepository")
		private investmentRepository: IInvestmentRepository
	) {}

	async execute({
		id,
		asset_name,
		asset_type,
		current_value,
		initial_investment,
		transaction_date,
		user_bank_id,
	}: IUpdateInvestmentDTO): Promise<void> {
		const checkInvestmentExist = await this.investmentRepository.listId({
			id,
		});

		if (!checkInvestmentExist) {
			throw new AppError("Investment not-exist");
		}

		await this.investmentRepository.update({
			id,
			asset_name,
			asset_type,
			current_value,
			initial_investment,
			transaction_date,
			user_bank_id,
		});
	}
}

export { UpdateInvestmentUseCase };
