import { inject, injectable } from "tsyringe";
import { IBankRepository } from "../../../repositorie/IBankRepository";
import { Bank } from "@prisma/client";

@injectable()
class ListBankUseCase {
	constructor(
		@inject("BankRepository")
		private bankRepository: IBankRepository
	) {}

	async execute(): Promise<Bank[]> {
		return await this.bankRepository.list();
	}
}

export { ListBankUseCase };
