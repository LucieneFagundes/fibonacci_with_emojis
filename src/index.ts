import promptSync from "prompt-sync";
const prompt = promptSync();

function startApp() {
  console.log("Bem-vindo ao Fibonacci Emoji!\n");

  do {
    var response = prompt("Digite um número maior que 0 (ou 'sair' para encerrar): ");

    if (response.toLowerCase() === 'sair') {
      console.log("Encerrando o programa. Até logo!");
      break;
    }

    const numberInput = Number(response);

    if (isNaN(numberInput) || numberInput <= 0) {
      console.log("Por favor, digite um número válido maior que 0.");
      continue;
    }

    var result = fibonacci(numberInput);

    console.log(`Entrada: ${numberInput}`);
    var resultWithEmoji = replaceToEmoji(result);
    console.log(`Saída: ${resultWithEmoji} \n`);
  } while (true);
}

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
  const emojis = ["🚀", "☘️", "🧑🏼‍🚀", "🤘🏼", "🇧🇷", ];

  const arrayWithEmojis = content.map((number) =>
    number % 2 === 0 ? emojis[number % emojis.length] : number
  );

  const result = arrayWithEmojis.join(" - ");

  return result;
}

startApp();