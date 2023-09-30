import { container } from "tsyringe";
import { IUserRepository } from "../../modules/user/repositore/IUserRepository";
import { UserRepository } from "../../modules/user/repositore/implemantion/UserRepository";
import { IBankRepository } from "../../modules/bank/repositorie/IBankRepository";
import { BankRepository } from "../../modules/bank/repositorie/implemantion/BankRepository";
import { IUserBankRepository } from "../../modules/bank/repositorie/IUserBankRepository";
import { UserBankRepository } from "../../modules/bank/repositorie/implemantion/UserBankRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IBankRepository>("BankRepository", BankRepository);

container.registerSingleton<IUserBankRepository>(
	"UserBankRepository",
	UserBankRepository
);
