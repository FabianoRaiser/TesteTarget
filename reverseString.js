const prompt = require("readline");

// função que inverte a string
function reverseString(string) {
    let strArr = string.split(''); // separação da string em um array
    // console.log(strArr); // verificação da string inputada
    let reversedStr = [];

    for(let i = 1; i <= strArr.length; i++) {
        reversedStr.push(strArr[strArr.length - i])
    }

    return reversedStr.join(''); // agrupamento na nova string
}

// Interface de entrada de comandos
const rl = prompt.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// questão e retorno
rl.question("Qual é a frase a ser invertida? ", function (answer) {
  console.log("Ela ficará assim: " + reverseString(answer));
  rl.close();
});
