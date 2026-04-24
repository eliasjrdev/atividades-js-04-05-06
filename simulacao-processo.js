const readline = require("readline-sync");
console.log('===============================================')
console.log('[BEM] [VINDO] [À] [SUA] [CONTA] [ITAU]')
console.log('===============================================')
console.log('')

let controle = true;
let valorAtualDaConta = 1000;
const senha = 1234;

while (controle) {
    console.log(`Seu saldo bancário é de : R$ ${valorAtualDaConta} Reais`)
    console.log('[1] - DEPOSITAR ')
    console.log('[2] - SACAR ')
    console.log('[3] - SAIR ')
    console.log('')
    const opcao = readline.question('ESCOLHA A QUE VOCE QUER FAZER (1 | 2 | 3): ').toLowerCase();

    switch (opcao) {
        case '1':
            const pegarSenhaDep = Number(readline.question('Informe sua senha:'))
            if (pegarSenhaDep === senha) {
                depositar()
            } else {
                console.log('')
                console.log('====================================')
                console.log('Senha inválida. Tente novamente !')
                console.log('====================================')
                console.log('')
            }

            break;
        case '2':
            const pegarSenhaSac = Number(readline.question('Informe sua senha:'))
            if (pegarSenhaSac === senha) {
                sacar()
            } else {
                console.log('')
                console.log('====================================')
                console.log('Senha inválida. Tente novamente !')
                console.log('====================================')
                console.log('')
            }
            break;
        case '3':
            console.log('SESSÃO FINALIZADA !')
            controle = false;
            break;
    }
}

function depositar() {
    const valorDeposito = Number(readline.question('Quanto voce quer depositar ?:'));
    valorAtualDaConta = valorAtualDaConta + valorDeposito;
    console.log('===============================================')
    console.log('Deposito realizado com sucesso !')
    console.log(`Seu saldo agora é de R$ ${valorAtualDaConta} Reais.`);
    console.log('===============================================')
}

function sacar() {
    const valorSaque = Number(readline.question('Quanto voce quer Sacar ?:'));
    valorAtualDaConta = valorAtualDaConta - valorSaque;
    console.log('===============================================')
    console.log('Saque realizado com sucesso !')
    console.log(`Seu saldo agora é de R$ ${valorAtualDaConta} Reais.`);
    console.log('===============================================')
}