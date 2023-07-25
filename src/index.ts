// Exemplo: imprimir os primeiros 10 números da sequência de Fibonacci
var n = 12;
var result = fibonacci(n);
console.log(`Entrada: ${n} `);
var resultWithEmoji = replaceToEmoji(result);
console.log(`Saída: ${resultWithEmoji}`);

function fibonacci(n: number): number[] {
	if (n === 0) {
		return [];
	} else if (n === 1) {
		return [0];
	} else if (n === 2) {
		return [0, 1];
	} else {
		var sequence = [0, 1];
		for (var i = 2; i < n + 1; i++) {
			sequence.push(sequence[i - 1] + sequence[i - 2]);
		}
		return sequence;
	}
}

function replaceToEmoji(content: number[]) {
	const emojis = ["🚀", "☘️", "🧑🏼‍🚀", "🤘🏼", "🇧🇷"];

	const arrayWithEmojis = content.map((number) =>
		number % 2 === 0 ? emojis[number % emojis.length] : number
	);

  const result = arrayWithEmojis.join(" - ")

	return result;
}
