const readline = require("readline-sync");
function cadastro() {
    const nome = readline.question('Digite seu nome: ');
    const idade = Number(readline.question('Digite sua idade: ')); // A função Number() faz uma validação para obrigar que a idade seja um numero. 
    const empregado = readline.question('Voce stá empregado ? (s/n):').toLowerCase();
    var sexo = readline.question('Informe seu sexo (m/f): ').toLocaleLowerCase();

    const estaEmpregado = empregado === 's';

    const resAposent = 60 - idade;

    if (estaEmpregado) {
        if (sexo === 'm') {
            console.log(`Olá, ${nome} parabéns, você tem ${idade} anos e já está empregado. Faltam ${resAposent} anos para você se aposentar.`);
        } else if (sexo === 'f') {
            console.log(`Olá, ${nome} parabéns, você tem ${idade} anos e já está empregada. Faltam ${resAposent} anos para você se aposentar.`);
        } else {

            console.log('Sexo inválido, reponda novamente com m ou f: ')
            var sexo = readline.question('Informe seu sexo (m/f): ').toLocaleLowerCase();
            if (sexo === 'm') {
                console.log(`Olá, ${nome} parabéns, você tem ${idade} anos e já está empregado. Faltam ${resAposent} anos para você se aposentar. `);
            } else if (sexo === 'f') {
                console.log(`Olá, ${nome} parabéns, você tem ${idade} anos e já está empregada. Faltam ${resAposent} anos para você se aposentar.`);
            }
        }

    } else {
        if (sexo === 'm') {
            console.log(`Olá, ${nome} você tem ${idade} anos e ainda não está empregado, mas continue tentando.`);
        } else if (sexo === 'f') {
            console.log(`Olá, ${nome} você tem ${idade} anos e ainda não está empregada, mas continue tentando.`);
        } else {
            console.log('Sexo inválido, reponda novamente com m ou f: ')
            var sexo = readline.question('Informe seu sexo (m/f): ').toLocaleLowerCase();
            if (sexo === 'm') {
                console.log(`Olá, ${nome} você tem ${idade} anos e ainda não está empregado, mas continue tentando.`);
            } else if (sexo === 'f') {
                console.log(`Olá, ${nome} você tem ${idade} anos e ainda não está empregada, mas continue tentando.`);
            }
        }

    }
}

module.exports = cadastro;

if (require.main === module) {
  cadastro();
}