import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../../repositorie/IInvestmentRepository";
import { ICreateInvestmentDTO } from "../../../dto/investment/ICreateInvestmentDTO";
import { IUpdateInvestmentDTO } from "../../../dto/investment/IUpdateInvestmentDTO";
import AppError from "../../../../../shared/errors/AppErrors";
import { IUpdatePriceInvestmentDTO } from "../../../dto/investment/IUpdatePriceInvestmentDTO";

@injectable()
class UpdatePriceInvestmentUseCase {
	constructor(
		@inject("InvestmentRepository")
		private investmentRepository: IInvestmentRepository
	) {}

	async execute({ id, price }: IUpdatePriceInvestmentDTO): Promise<void> {
		const checkInvestmentExist = await this.investmentRepository.listId({
			id,
		});

		if (!checkInvestmentExist) {
			throw new AppError("Investment not-exist");
		}

		await this.investmentRepository.updatePrice({
			id,
			price,
		});
	}
}

export { UpdatePriceInvestmentUseCase };
