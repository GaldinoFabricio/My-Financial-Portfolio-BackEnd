import { inject, injectable } from "tsyringe";
import { IUserRepositorie } from "../../repositore/IUserRepository";
import { IListIdUserDTO } from "../../dto/IListIdUserDTO";
import AppError from "../../../../shared/errors/AppErrors";
import isUUID from "../../../../shared/lib/isUUID";

@injectable()
class ListIdUserUseCase {
	constructor(
		@inject("UserRepository")
		private userRepository: IUserRepositorie
	) {}

	async execute({ id }: IListIdUserDTO): Promise<{ id: string } | null> {
		if (!isUUID(id)) {
			throw new AppError("id invalid", 400);
		}

		return await this.userRepository.listId({ id });
	}
}

export { ListIdUserUseCase };
