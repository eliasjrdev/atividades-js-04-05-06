const readline = require("readline-sync");

const missoes = [
    "Derrotar o dragão",
    "Resgatar a princesa",
    "Encontrar o tesouro perdido"
];

// CRIAR O JOGADOR
function criarJogador(nomeJogador, nivelJogador) {
    return {
        nome: nomeJogador,
        nivel: Number(nivelJogador)
    }
}

// CRIAR UM PERSONAGEM
function Personagem(nome, classe, poder){
    this.nome = nome;
    this.classe = classe;
    this.poder = poder;

    this.atacar = function(){
        console.log(`${this.nome}, o ${this.classe} ataca usando ${this.poder} !`);
    };
}

// MOSTRAR O JOGADOR
function mostrarJogador(jogador) {
    console.log('Jogador criado com sucesso !');
    console.log(`Jogador: ${jogador.nome} | Nível: ${jogador.nivel}`)
}

// lISTAR MISSÕES
const listarMissoes = (missoes)=>{
    console.log('')
    console.log('MISSÕES DISPONÍVEIS PARA O JOGADOR: ')
    missoes.forEach((missao, index) => {
        
        console.log(`${index + 1}. ${missao}`);
    });
}

// EXECUTAR MISSÃO
function executarMissao(jogador, missao, callback) {
    console.log('')
    console.log(`Missão "${missao}" concluída!`);

    callback(jogador);
    console.log('')
}

// ATUALIZAR PONTOS
const atualizarPontos = (jogador, pontos) => {
    jogador.nivel = Number(jogador.nivel);

    const niveisGanhos = Math.floor(pontos / 100);
    jogador.nivel = jogador.nivel + niveisGanhos;

    console.log(`${jogador.nome} ganhou ${pontos} pontos.`);
    console.log(`Nível atual: ${jogador.nivel}`);
}

// RECOMPENSA (BÔNUS)
const recompensa = (jogador) => {
    const bonusPontos = 200;

    atualizarPontos(jogador, bonusPontos);
};
 
// SUBIR TORRE
function subirTorre(andarAtual, totalAndares){
    if(andarAtual > totalAndares){
        console.log('O personagem chegou ao topo da torre !')
        return;
    }

    console.log(`Subindo para o andar ${andarAtual}...`)
    subirTorre(andarAtual + 1, totalAndares);
}


// SIMULAÇÃO

console.log('HORA DE CRIAR SEU JOGADOR !')
const nome = readline.question('Informe um nome para o jogador: ')
const nivel = readline.question('Informe o nivel do jogador: ')

const jogador1 = criarJogador(nome, nivel);
mostrarJogador(jogador1);

// CRIAR PERSONAGEM
const pegarPersonagemNome = readline.question('Informe um nome para o Personagem: ');
const pegarPersonagemClasse = readline.question('Informe uma categoria para o personagem: ');
const pegarPersonagemPoder = readline.question('Informe um poder para o personagem: ');

const personagem1 = new Personagem(pegarPersonagemNome, pegarPersonagemClasse, pegarPersonagemPoder );
console.log('')

// ATACAR
personagem1.atacar()

// LISTAR MISSÕES
listarMissoes(missoes);

// EXECUTAR MISSÃO + RECOMPENSA + CALLBACK
executarMissao(jogador1, missoes[1] , recompensa);
console.log('')


// SUBIR A TORRE
subirTorre(1, 5)




















