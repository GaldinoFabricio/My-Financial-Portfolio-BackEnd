import { container } from "tsyringe";
import { IUserRepository } from "../../modules/user/repositore/IUserRepository";
import { UserRepository } from "../../modules/user/repositore/implemantion/UserRepository";
import { IBankRepository } from "../../modules/bank/repositorie/IBankRepository";
import { BankRepository } from "../../modules/bank/repositorie/implemantion/BankRepository";
import { IUserBankRepository } from "../../modules/bank/repositorie/IUserBankRepository";
import { UserBankRepository } from "../../modules/bank/repositorie/implemantion/UserBankRepository";
import { IInvestmentRepository } from "../../modules/investment/repositorie/IInvestmentRepository";
import { InvestmentRepository } from "../../modules/investment/repositorie/implemantion/InvestmentRepository";
import { IStockRepository } from "../../modules/stock/repositorie/IStockRepository";
import { StockRepository } from "../../modules/stock/repositorie/implemantion/StockRepository";
import { IRecommededStockRepository } from "../../modules/stock/repositorie/IRecommededStockRepository";
import { RecommendedStockRepository } from "../../modules/stock/repositorie/implemantion/RecommededStockRepository";
import { IGroupRoleRepository } from "../../modules/role/repositorie/IGroupRoleRepository";
import { GroupRoleRepository } from "../../modules/role/repositorie/implemantion/GroupRoleRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IBankRepository>("BankRepository", BankRepository);

container.registerSingleton<IUserBankRepository>(
	"UserBankRepository",
	UserBankRepository
);

container.registerSingleton<IInvestmentRepository>(
	"InvestmentRepository",
	InvestmentRepository
);

container.registerSingleton<IStockRepository>(
	"StockRepository",
	StockRepository
);

container.registerSingleton<IRecommededStockRepository>(
	"RecommededStockRepository",
	RecommendedStockRepository
);

container.registerSingleton<IGroupRoleRepository>(
	"GroupRoleRepository",
	GroupRoleRepository
);
