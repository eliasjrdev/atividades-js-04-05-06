const readline = require("readline-sync");

console.log('INFORME TRES VALORES E O PROGRAMA DIRÁ QUAL O MAIOR VALOR QUE FOI INFORMADO.')
const valor1 = Number(readline.question('Informe o primeiro valor: ')); 
const valor2 = Number(readline.question('Informe o segundo valor: ')); 
const valor3 = Number(readline.question('Informe o terceiro valor: ')); 

if(valor1 > valor2 && valor1 > valor3){
    console.log(`O maior valor digitado foi ${valor1}`);
}else if(valor2 > valor1 && valor2 > valor3){
    console.log(`O maior valor digitado foi ${valor2}`);
}else if(valor3 > valor1 && valor3 > valor2){
    console.log(`O maior valor digitado foi ${valor3}`);
}

