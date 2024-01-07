import { inject, injectable } from "tsyringe";
import { IUserBankRepository } from "../../repositories/IUserBankRepository";
import { IListUserIdUserBankDTO } from "../../dto/IListUserIdUserBankDTO";
import { UserBank } from "@prisma/client";

@injectable()
class ListUserIdUserBankUseCase {
   constructor(
      @inject("UserBankRepository")
      private userBankRepository: IUserBankRepository
   ) {}

   async execute({ user_id }: IListUserIdUserBankDTO): Promise<UserBank[]> {
      return await this.userBankRepository.listUserId({ user_id });
   }
}

export { ListUserIdUserBankUseCase };
