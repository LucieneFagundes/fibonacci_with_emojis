import express from "express";
import { fibonacci } from "./utils/fibonacci";
import { replaceToEmoji } from "./utils/replace-to-emoji";

const app = express();

app.get("/fibonacci/:number", (req, res) => {
	const { number } = req.params;

	let numberToNumber = Number(number);

	if (isNaN(numberToNumber) || numberToNumber <= 0) {
		return res.json({
			message: "Por favor, digite um número válido maior que 0.",
		});
	}

	const numberInput = fibonacci(Number(number));
	const arrayWithEmojis = replaceToEmoji(numberInput);

	return res.json({
		Entrada: number,
		Saída: arrayWithEmojis,
	});
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
