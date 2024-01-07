import { Decimal } from "@prisma/client/runtime/library";
import { prismaClient } from "../../../../database";
import { ICreateStockDTO } from "../../dto/ICreateStockDTO";
import { IStockRepository } from "../IStockRepository";
import { stock } from "@prisma/client";

class StockRepository implements IStockRepository {
  async create(data: ICreateStockDTO): Promise<void> {
    await prismaClient.stock.create({ data });
  }

  async list(): Promise<stock[]> {
    return await prismaClient.stock.findMany();
  }

  async filter(): Promise<
    {
      stock: { stock_id: string } | null;
      id: string;
      Papel: string;
      PL: Decimal;
      DivYield: Decimal;
      MrgLiq: Decimal;
      ROIC: Decimal;
      PatrimLiq: Decimal;
    }[]
  > {
    return await prismaClient.stock.findMany({
      where: {
        DivYield: {
          not: {
            equals: 0,
          },
        },
        MrgLiq: {
          gte: 0.1, // 10%
        },
        ROIC: {
          gte: 0.1, // 10%
        },
        PatrimLiq: {
          gt: 0,
        },
      },
      select: {
        Papel: true,
        DivYield: true,
        MrgLiq: true,
        PatrimLiq: true,
        PL: true,
        id: true,
        ROIC: true,
        stock: {
          select: {
            stock_id: true,
          },
        },
      },
    });
  }
}

export { StockRepository };
