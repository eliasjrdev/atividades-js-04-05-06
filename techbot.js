const readline = require("readline-sync");

const cadastro = require("./cadastro");
const estoque = require("./estoque");
const financas = require("./financas");
const login = require("./login");

let executando = true;

while (executando) {
    console.log
    console.log('===============================================================')

    console.log("[B][E][M]   [V][I][N][D][O]   [A][O]   [T][E][C][H][B][O][T]");

    console.log('===============================================================')

    console.log("1 - Cadastro de Usuário");
    console.log("2 - Calculadora Financeira");
    console.log("3 - Sistema de Login");
    console.log("4 - Relatório de Estoque");
    console.log("0 - Sair");

    const opcao = readline.question('Escolha uma opcao de 1 a 4 ou escolha 0 para sair: ')

    switch(opcao){
        case '1':
            cadastro();
        break;

        case '2':
            financas();
        break;

        case '3':
            login();
        break;

        case '4':
            estoque();
        break;

        case '0':
            console.log('Sessao encerrada. Até mais...');
            executando = false;
        break

        default:
            console.log('Opcao invalida !');
    }

}




