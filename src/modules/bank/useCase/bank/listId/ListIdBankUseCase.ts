import { inject, injectable } from "tsyringe";
import { IBankRepository } from "../../../repositorie/IBankRepository";
import { IListIdBankDTO } from "../../../dto/bank/IListIdBankDTO";
import { Bank } from "@prisma/client";
import isUUID from "../../../../../shared/lib/isUUID";
import AppError from "../../../../../shared/errors/AppErrors";

@injectable()
class ListIdBankUseCase {
	constructor(
		@inject("BankRepository")
		private bankRepository: IBankRepository
	) {}

	async execute({ id }: IListIdBankDTO): Promise<Bank | null> {
		if (isUUID(id)) {
			throw new AppError("invalid id");
		}

		return await this.bankRepository.listId({ id });
	}
}

export { ListIdBankUseCase };
