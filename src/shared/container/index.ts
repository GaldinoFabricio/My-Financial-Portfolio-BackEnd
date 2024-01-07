import { container } from "tsyringe";
import { IUserRepository } from "../../modules/user/repositore/IUserRepository";
import { UserRepository } from "../../modules/user/repositore/implemantion/UserRepository";
import { IBankRepository } from "../../modules/bank/repositorie/IBankRepository";
import { BankRepository } from "../../modules/bank/repositorie/implemantion/BankRepository";
import { IUserBankRepository } from "../../modules/userBank/repositories/IUserBankRepository";
import { UserBankRepository } from "../../modules/userBank/repositories/implemantions/UserBankRepository";
import { IInvestmentRepository } from "../../modules/investment/repositorie/IInvestmentRepository";
import { InvestmentRepository } from "../../modules/investment/repositorie/implemantion/InvestmentRepository";
import { IStockRepository } from "../../modules/stock/repositorie/IStockRepository";
import { StockRepository } from "../../modules/stock/repositorie/implemantion/StockRepository";
import { IRecommededStockRepository } from "../../modules/recommendedStock/repositories/IRecommededStockRepository";
import { RecommendedStockRepository } from "../../modules/recommendedStock/repositories/implemention/RecommededStockRepository";
import { ICategoryRepository } from "../../modules/category/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/category/repositories/implemantion/CategoryRepository";
import { IExpenseCategoryTableRepository } from "../../modules/expenseCategoryTable/repositores/IExpenseCategoryTableRepository";
import { ExpenseCategoryTableRepository } from "../../modules/expenseCategoryTable/repositores/implemantion/ExpenseCategoryTableRepository";
import { IMonthlyCombinedCardExpensesRepository } from "../../modules/monthlyCombinedCardExpenses/repositorie/IMonthlyCombinedCardExpensesRepository";
import { MonthlyCombinedCardExpensesRepository } from "../../modules/monthlyCombinedCardExpenses/repositorie/implemantions/MonthlyCombinedCardExpensesRepository";
import { IRoleRepository } from "../../modules/role/repositorie/IRoleRepository";
import { RoleRepository } from "../../modules/role/repositorie/implemantion/RoleRepository";

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

container.registerSingleton<ICategoryRepository>(
   "CategoryRepository",
   CategoryRepository
);

container.registerSingleton<IExpenseCategoryTableRepository>(
   "ExpenseCategoryTableRepository",
   ExpenseCategoryTableRepository
);

container.registerSingleton<IMonthlyCombinedCardExpensesRepository>(
   "MonthlyCombinedCardExpensesRepository",
   MonthlyCombinedCardExpensesRepository
);

container.registerSingleton<IRoleRepository>("RoleRepository", RoleRepository);
