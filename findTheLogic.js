const prompt = require("readline");


// item a)
function plusTwo(n) {
    let arrayPT = [1];

    for(let i = 0; i < n-1; i++){
        arrayPT.push(parseInt(arrayPT[i] + 2));
    }
    // console.log(arrayPT); // verificação do array
    return arrayPT;
}

// item c)

function addArrayPT(iArray, arrayPT) {
    let arrayAdded = [0];

    for(let k = 0; k < iArray-1; k++) {
        arrayAdded.push(arrayAdded[k] + arrayPT[k])
    }
    // console.log(arrayAdded); // verificação do array
    return arrayAdded;
}

function timesAddArrPT(tArray, addArrayPT){
    let arrayTimes = [4];

    for(let j = 0; j < tArray-1; j++ ) {
        arrayTimes.push(arrayTimes[0] * addArrayPT[j+2])
    }
    console.log(arrayTimes);
    return arrayTimes;
}

// Interface de entrada de comandos
const rl = prompt.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

rl.question("Quantos elemetos há na sequencia? ", (answer) => {
    console.log("a) A sequencia será " + plusTwo(answer));
    console.log("c) A sequencia somada será " + addArrayPT(answer, plusTwo(answer)));
    console.log("d) A sequencia multiplicada será " + timesAddArrPT(answer, addArrayPT(answer + 1, plusTwo(answer))));
    rl.close();
});
