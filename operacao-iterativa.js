const readline = require("readline-sync");

const operacao = readline.question('Qual operacao voce quer fazer ? (Soma / Multiplicacao / Subtracao)').toLowerCase();
const valorInicial = Number(readline.question('Informe o valor inicial da operacao: '));
const valorOperaca0 = Number(readline.question('Informe o valor da operacao: '))
const quantidadeRepeticao = Number(readline.question('Quantas vezes voce quer que a operacao seja feita ?'));

let contador = 1;
let resultado = valorInicial;

while (contador <= quantidadeRepeticao) {
    switch (operacao) {
        case 'soma':
            resultado = resultado + valorOperaca0
            console.log(`Resultado ${contador}: ${resultado}`);
            break;
        case 'multiplicacao':
            resultado = resultado * valorOperaca0
            console.log(`Resultado ${contador}: ${resultado}`);
            break;
        case 'subtracao':
            resultado = resultado - valorOperaca0
            console.log(`Resultado ${contador}: ${resultado}`);
            break;
        
        default: 
            console.log('Você informou algum dos valores errado. Por favor, tente novamente !')
    }

    contador++
}


