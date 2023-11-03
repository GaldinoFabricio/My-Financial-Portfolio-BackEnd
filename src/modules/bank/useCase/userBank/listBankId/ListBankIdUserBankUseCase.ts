import { inject, injectable } from "tsyringe";
import { IUserBankRepository } from "../../../repositorie/IUserBankRepository";
import { IListBankIdUserBankDTO } from "../../../dto/userBank/IListBankIdUserBankDTO";
import { UserBank } from "@prisma/client";

@injectable()
class ListBankIdUserBankUseCase {
	constructor(
		@inject("UserBankRepository")
		private userBankRepository: IUserBankRepository
	) {}

	async execute({ bank_id }: IListBankIdUserBankDTO): Promise<UserBank[]> {
		return await this.userBankRepository.listBankId({ bank_id });
	}
}

export { ListBankIdUserBankUseCase };
