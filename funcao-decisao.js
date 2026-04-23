const readline = require("readline-sync");

const nota1 = Number(readline.question('Informe a primeira nota do aluno: '));

const nota2 = Number(readline.question('Informe a segunda nota do aluno: '));

const nota3 = Number(readline.question('Informe a terceira nota do aluno: '));

const media = (nota1 + nota2 + nota3)/ 3


if(media >= 7){
    console.log(`A média do aluno é ${media.toFixed(2)} e o aluno está aprovado !`);
}else{
    console.log(`A média do aluno é ${media.toFixed(2)} e o aluno foi reprovado !`);
}