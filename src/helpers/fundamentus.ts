import axios from "axios";
import * as cheerio from "cheerio";
import { StockRepository } from "../modules/stock/repositorie/implemantion/StockRepository";

function parseStringToNumber(str: string) {
	// Remove caracteres indesejados, como espaços em branco
	str = str.replace(/\s/g, "");

	// Verifique se a string termina com '%' e remova, se necessário
	if (str.endsWith("%")) {
		str = str.slice(0, -1);
		// Converta a string para um número, dividindo por 100 para obter a porcentagem
		return parseFloat(str) / 100;
	}

	// Se não for uma porcentagem, apenas converta a string para um número
	return parseFloat(str);
}

function parseStringToNumberWithFormat(str: string) {
	// Remova todos os pontos como separadores de milhares
	str = str.replace(/\./g, "");

	// Substitua a vírgula por um ponto como separador decimal
	str = str.replace(",", ".");

	// Converta a string para um número
	return parseFloat(str);
}

async function fundamentus() {
	try {
		const response = await axios.get(
			"https://www.fundamentus.com.br/resultado.php"
		);

		const $ = cheerio.load(response.data);

		const tableWithClass = $("#resultado");
		const tbody = tableWithClass.find("tbody");

		const articleTitles: string[] = [];
		const stockRepository = new StockRepository();

		if (tbody.length > 0) {
			tbody.find("tr").each(async (index, element) => {
				const rowData = $(element).text().trim().split("\n");
				await stockRepository.create({
					Papel: rowData[0],
					Cotacao: parseStringToNumberWithFormat(rowData[1]),
					PL: parseStringToNumberWithFormat(rowData[2]),
					PV: parseStringToNumberWithFormat(rowData[3]),
					PSR: parseStringToNumberWithFormat(rowData[4]),
					DivYield: parseStringToNumber(rowData[5]),
					PAtivo: parseStringToNumberWithFormat(rowData[6]),
					PCapGiro: parseStringToNumberWithFormat(rowData[7]),
					PEBIT: parseStringToNumberWithFormat(rowData[8]),
					PAtivCircLiq: parseStringToNumberWithFormat(rowData[9]),
					EVEBIT: parseStringToNumberWithFormat(rowData[10]),
					EVEBITDA: parseStringToNumberWithFormat(rowData[11]),
					MrgEbit: parseStringToNumberWithFormat(rowData[12]),
					MrgLiq: parseStringToNumberWithFormat(rowData[13]),
					LiqCorr: parseStringToNumberWithFormat(rowData[14]),
					ROIC: parseStringToNumberWithFormat(rowData[15]),
					ROE: parseStringToNumberWithFormat(rowData[16]),
					Liq2meses: parseStringToNumberWithFormat(rowData[17]),
					PatrimLiq: parseStringToNumber(
						parseStringToNumberWithFormat(rowData[18]).toString()
					),
					DivBrutPatrim: parseStringToNumberWithFormat(rowData[19]),
					CrescRec5a: parseStringToNumber(rowData[20]),
				});
			});
		} else {
			console.log('Tabela com a classe "my-table" não encontrada.');
		}

		//console.log(articleTitles);
	} catch (error) {
		console.error("Erro ao raspar a página:", error);
	}
}

export default fundamentus;
