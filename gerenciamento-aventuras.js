const readline = require("readline-sync");

function criarJogador(nomeJogador, nivelJogador){
    return{
        nome: nomeJogador,
        nivel: nivelJogador
    }
}

function mostrarJogador(jogador){
    console.log(`Jogador: ${jogador.nome} \n Nível: ${jogador.nivel}`)
}

console.log('HORA DE CRIAR SEU JOGADOR !')
const nome = readline.question('Informe um nome para o jogador: ')
const nivel = readline.question('Informe o nivel do jogador: ')

const jogador1 = criarJogador(nome, nivel);

mostrarJogador(jogador1);
