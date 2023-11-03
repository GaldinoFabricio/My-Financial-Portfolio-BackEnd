import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../../repositorie/IInvestmentRepository";
import { ICreateInvestmentDTO } from "../../../dto/investment/ICreateInvestmentDTO";

@injectable()
class CreateInvestmentUseCase {
	constructor(
		@inject("InvestmentRepository")
		private investmentRepository: IInvestmentRepository
	) {}

	async execute({
		amount,
		asset_name,
		asset_type,
		price,
		transaction_date,
		user_bank_id,
	}: ICreateInvestmentDTO): Promise<void> {
		await this.investmentRepository.create({
			amount,
			asset_name,
			asset_type,
			transaction_date,
			user_bank_id,
			price,
		});
	}
}

export { CreateInvestmentUseCase };
