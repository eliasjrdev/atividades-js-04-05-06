const readline = require("readline-sync");

function login() {
    const usuarios = [
        {
            nome: "admin",
            senha: "1234", cargo: "Gerente"
        },
        {
            nome: "joao",
            senha: "abcd",
            cargo: "Funcionário"
        },
    ];

    const nome = readline.question('Informe seu nome de usuario: ').toLowerCase();
    const senha = readline.question('Informe sua senha: ').toLowerCase();

    const loginGerente = usuarios[0].nome;
    const senhaGerente = usuarios[0].senha;
    const loginFuncionario = usuarios[1].nome;
    const senhaFuncionario = usuarios[1].senha;

    if (nome === loginGerente && senha === senhaGerente) {
        console.log('Login efetuado com sucesso !');
        console.log(`Olá, ${usuarios[0].cargo} seja bem vindo, vc tem acesso total liberado !`)
    } else if (nome === loginFuncionario && senha === senhaFuncionario) {
        console.log('=======================================================================================================================')
        console.log('Login efetuado com sucesso !')
        console.log(`Olá, ${usuarios[1].cargo} ${usuarios[1].nome} seja bem vindo, seu acesso é limitado às funções básicas do sistema!`)
        console.log('=======================================================================================================================')
    } else {
        console.log('Usuário ou senha inválidos, por favor, tente novamente !')
    }
}

module.exports = login;

if (require.main === module) {
    login();
}