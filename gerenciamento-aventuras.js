const readline = require("readline-sync");

const missoes = [
    "Derrotar o dragão",
    "Resgatar a princesa",
    "Encontrar o tesouro perdido"
];


function criarJogador(nomeJogador, nivelJogador) {
    return {
        nome: nomeJogador,
        nivel: nivelJogador
    }
}


function mostrarJogador(jogador) {
    console.log(`Jogador: ${jogador.nome} \n Nível: ${jogador.nivel}`)

}


const atualizarPontos = (jogador, pontos) => {
    jogador.nivel = Number(jogador.nivel);

    const niveisGanhos = Math.floor(pontos / 100);
    jogador.nivel = jogador.nivel + niveisGanhos;

    console.log(`${jogador.nome} ganhou ${pontos} pontos.`);
    console.log(`Nível atual: ${jogador.nivel}`);
}


const listarMissoes = (missoes)=>{
    missoes.forEach((missao, index) => {
        
        console.log(`${index + 1}. ${missao}`);
    });
}


function executarMissao(jogador, missao, callback) {
    console.log(`${jogador.nome} está executando a missão: ${missao}...`);

    console.log(`Missão "${missao}" concluída!`);

    callback(jogador);
}

const recompensa = (jogador) => {
    const bonusPontos = 200;

    console.log(`Parabéns, ${jogador.nome}! Você recebeu ${bonusPontos} pontos de bônus.`);

    const niveisGanhos = Math.floor(bonusPontos / 100);
    jogador.nivel += niveisGanhos;

    console.log(`Novo nível: ${jogador.nivel}`);
};

console.log('HORA DE CRIAR SEU JOGADOR !')
const nome = readline.question('Informe um nome para o jogador: ')
const nivel = readline.question('Informe o nivel do jogador: ')

const jogador1 = criarJogador(nome, nivel);

mostrarJogador(jogador1);

const pontos = Number(readline.question('Quantos pontos o jogador ganhou? '));

atualizarPontos(jogador1, pontos);
console.log('')
console.log('MISSÕES DO JOGADOR: ')
listarMissoes(missoes);
console.log('')
executarMissao(jogador1, missoes[1] , recompensa);

