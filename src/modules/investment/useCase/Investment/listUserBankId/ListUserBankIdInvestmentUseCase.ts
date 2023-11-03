import { inject, injectable } from "tsyringe";
import { IInvestmentRepository } from "../../../repositorie/IInvestmentRepository";
import { Investment } from "@prisma/client";
import { IListIdInvestmentDTO } from "../../../dto/investment/IListIdInvestmentDTO";
import { IListUserBankIdInvestmentDTO } from "../../../dto/investment/IListUserBankIdInvestmentDTO";

@injectable()
class ListUserBankIdInvestmentUseCase {
	constructor(
		@inject("InvestmentRepository")
		private investmentRepository: IInvestmentRepository
	) {}

	async execute({
		user_bank_id,
	}: IListUserBankIdInvestmentDTO): Promise<Investment[]> {
		return await this.investmentRepository.listUserBankId({ user_bank_id });
	}
}

export { ListUserBankIdInvestmentUseCase };
