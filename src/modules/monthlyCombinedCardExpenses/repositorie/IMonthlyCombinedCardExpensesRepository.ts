import { MonthlyCombinedCardExpenses } from "@prisma/client";
import { ICreateMonthlyCombinedCardExpensesDTO } from "../dto/ICreateMonthlyCombinedCardExpensesDTO";
import { IFindIdMonthlyCombinedCardExpensesDTO } from "../dto/IFIndIdMonthlyCombinedCardExpensesDTO";
import { IFindUserIdMonthlyCombinedCardExpensesDTO } from "../dto/IFindUserIdMonthlyCombinedCardExpensesDTO";
import { IDeleteMonthlyCombinedCardExpensesDTO } from "../dto/IDeleteMonthlyCombinedCardExpensesDTO";
import { ILogicalDelteMonthlyCombinedCardExpensesDTO } from "../dto/ILogicalDeleteMonthlyCombinedCardExpensesDTO";
import { IUpdateMonthlyCombinedCardExpensesDTO } from "../dto/IUpdateMonthlyCombinedCardExpensesDTO";

interface IMonthlyCombinedCardExpensesRepository {
   create(
      input: ICreateMonthlyCombinedCardExpensesDTO
   ): Promise<MonthlyCombinedCardExpenses>;

   delete(input: IDeleteMonthlyCombinedCardExpensesDTO): Promise<void>;

   findId(
      input: IFindIdMonthlyCombinedCardExpensesDTO
   ): Promise<MonthlyCombinedCardExpenses | null>;

   findUserId(
      input: IFindUserIdMonthlyCombinedCardExpensesDTO
   ): Promise<MonthlyCombinedCardExpenses[]>;

   logicalDelete(
      input: ILogicalDelteMonthlyCombinedCardExpensesDTO
   ): Promise<MonthlyCombinedCardExpenses>;

   update(
      input: IUpdateMonthlyCombinedCardExpensesDTO
   ): Promise<MonthlyCombinedCardExpenses>;
}

export { IMonthlyCombinedCardExpensesRepository };
