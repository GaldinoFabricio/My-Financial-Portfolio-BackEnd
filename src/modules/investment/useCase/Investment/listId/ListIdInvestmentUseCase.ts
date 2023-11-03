import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../../repositorie/IInvestmentRepository";
import { Investment } from "@prisma/client";
import { IListIdInvestmentDTO } from "../../../dto/investment/IListIdInvestmentDTO";

@injectable()
class ListIdInvestmentUseCase {
	constructor(
		@inject("InvestmentRepository")
		private investmentRepository: IInvestmentRepository
	) {}

	async execute({ id }: IListIdInvestmentDTO): Promise<Investment | null> {
		return await this.investmentRepository.listId({ id });
	}
}

export { ListIdInvestmentUseCase };
