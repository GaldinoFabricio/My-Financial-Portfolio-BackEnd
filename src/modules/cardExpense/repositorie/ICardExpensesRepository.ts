import { CardExpenses } from "@prisma/client";
import { ICreateCardExpensesDTO } from "../dto/ICreateCardExpensesDTO";
import { IFindIdCardExpensesDTO } from "../dto/IFIndIdCardExpensesDTO";
import { IFindUserIdCardExpensesDTO } from "../dto/IFindUserIdCardExpensesDTO";
import { IDeleteCardExpensesDTO } from "../dto/IDeleteCardExpensesDTO";
import { IUpdateCardExpensesDTO } from "../dto/IUpdateCardExpensesDTO";

interface ICardExpensesRepository {
   create(input: ICreateCardExpensesDTO): Promise<CardExpenses>;

   delete(input: IDeleteCardExpensesDTO): Promise<CardExpenses>;

   findId(input: IFindIdCardExpensesDTO): Promise<CardExpenses | null>;

   findUserId(input: IFindUserIdCardExpensesDTO): Promise<CardExpenses[]>;

   update(input: IUpdateCardExpensesDTO): Promise<CardExpenses>;
}

export { ICardExpensesRepository };
