import { inject, injectable } from "tsyringe";
import { IBankRepository } from "../../../repositorie/IBankRepository";
import { ICreateBankDTO } from "../../../dto/bank/ICreateBankDTO";

@injectable()
class CreateBankUseCase {
	constructor(
		@inject("BankRepository")
		private bankRepository: IBankRepository
	) {}

	async execute({ name }: ICreateBankDTO): Promise<void> {
		await this.bankRepository.create({ name });
	}
}

export { CreateBankUseCase };
