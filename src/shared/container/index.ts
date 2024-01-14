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
import { IRoleRepository } from "../../modules/role/repositorie/IRoleRepository";
import { RoleRepository } from "../../modules/role/repositorie/implemantion/RoleRepository";
import { ICardExpensesRepository } from "../../modules/cardExpense/repositorie/ICardExpensesRepository";
import { CardExpensesRepository } from "../../modules/cardExpense/repositorie/implemantions/CardExpensesRepository";
import { IFixedExpenseRepository } from "../../modules/fixedExpense/repositores/IFixedExpenseRepository";
import { FixedExpenseRepository } from "../../modules/fixedExpense/repositores/implemantion/FixedExpenseRepository";
import { IIncomesRepository } from "../../modules/incomes/repositories/IIncomesRepository";
import { IncomesRepository } from "../../modules/incomes/repositories/implemantion/IncomesRepository";

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

container.registerSingleton<IFixedExpenseRepository>(
   "FixedExpenseRepository",
   FixedExpenseRepository
);

container.registerSingleton<ICardExpensesRepository>(
   "CardExpensesRepository",
   CardExpensesRepository
);

container.registerSingleton<IRoleRepository>("RoleRepository", RoleRepository);

container.registerSingleton<IIncomesRepository>(
   "IncomesRepository",
   IncomesRepository
);
