const readline = require("readline-sync");

console.log('OLÁ, A CONTAGEM AQUI DEFINIDA MOSTRARÁ APENAS VALORES ÍMPARES.')
const valor = Number(readline.question('Informe o valor ate onde sera contado: '))

for(let i = 0; i <= valor; i++){
    if(i % 2 === 1){
        console.log(i)
    }
}