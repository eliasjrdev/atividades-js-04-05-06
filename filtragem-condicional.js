const readline = require("readline-sync");

const quantidadeNumeros = Number(readline.question('Quantos numeros voce quer informar ?'));

let contador = 1;
let numeros = [];

while(contador <= quantidadeNumeros){
    let valores = Number(readline.question(`Informe o ${contador} numero: `))
    numeros.push(valores);
    contador++
}

function numerosDivisiveisPorCinco(valores) {
    let resultado = [];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 5 === 0) {
            resultado.push(valores[i]);
        }
    }

    return resultado;
}

console.log('Dos valores que voce informou, os divisiveis por cinco são: ' + numerosDivisiveisPorCinco(numeros));

