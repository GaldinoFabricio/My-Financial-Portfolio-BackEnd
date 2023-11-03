import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../../repositorie/IInvestmentRepository";
import { Investment } from "@prisma/client";

@injectable()
class ListInvestmentUseCase {
	constructor(
		@inject("InvestmentRepository")
		private investmentRepository: IInvestmentRepository
	) {}

	async execute(): Promise<Investment[]> {
		return await this.investmentRepository.list();
	}
}

export { ListInvestmentUseCase };
