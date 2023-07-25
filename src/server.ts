import express, { response } from "express";
import { fibonacci } from "./utils/fibonacci";
import { fibonacciWithEmojis } from "./utils/fibonacci-with-emojis";

const app = express();

app.get("/fibonacci/:number", (req, res) => {
	const { number } = req.params;

	const numberInput = fibonacci(Number(number));
	const arrayWithEmojis = fibonacciWithEmojis(numberInput);

	return res.json({ arrayWithEmojis });
});
const PORT = 3000
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
