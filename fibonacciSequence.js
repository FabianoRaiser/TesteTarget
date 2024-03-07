const prompt = require("readline");
let fibonacciArray = [];

// Função que gera a sequencia de Fibonacci de N elementos
function fibonacciSequence(n) {
  let sequence = [];
  function fibonacci(f) {
    if (f <= 0) return;
    if (f === 1) {
      sequence.push(0);
      return;
    }
    if (f === 2) {
      sequence.push(0, 1);
      return;
    }
    fibonacci(f - 1);
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
  }
  fibonacci(n);
  return sequence;
}

// Interface de entrada de comandos
const rl = prompt.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// QUESTÕES

// Questão que pergunta quantos elementos terá a Sequencia de Fibonacci a ser comparada
rl.question("Quantos elementos tem a sequencia? ", function (fiboAnswer) {
  let nSequence = parseInt(fiboAnswer); // Alteração de tipo da entrada
  fibonacciArray = fibonacciSequence(nSequence);
//   console.log(fibonacciArray);  // verificação de valores da sequencia

  // Questão que pergunta qual o número que será comparado
  rl.question("Qual o número comparado? ", function (numberAnswer) {
    let nAnswer = parseInt(numberAnswer); // Alteração de tipo da entrada

    // Análise de comparação
    let finded = false;
    for (let i = 0; i < fibonacciArray.length; i++) {
      if (fibonacciArray[i] === nAnswer) {
        finded = true;
        break;
      }
    }

    // Respostas do Programa
    if (finded) {
      console.log(
        `${nAnswer} está na sequência de Fibonacci de ${nSequence} elementos.`
      );
      rl.close();
    } else {
      console.log(
        `${nAnswer} não está na sequência de Fibonacci de ${nSequence} elementos.`
      );
      rl.close();
    }
  });
});
