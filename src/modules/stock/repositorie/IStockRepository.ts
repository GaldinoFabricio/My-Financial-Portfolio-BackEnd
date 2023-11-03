import { stock } from "@prisma/client";
import { ICreateStockDTO } from "../dto/stock/ICreateStockDTO";
import { Decimal } from "@prisma/client/runtime/library";

interface IStockRepository {
	create(data: ICreateStockDTO): Promise<void>;

	list(): Promise<stock[]>;

	filter(): Promise<
		{
			Papel: string;
			stock: { stock_id: string } | null;
			id: string;
			PL: Decimal;
			DivYield: Decimal;
			MrgLiq: Decimal;
			ROIC: Decimal;
			PatrimLiq: Decimal;
		}[]
	>;
}

export { IStockRepository };
