const readline = require("readline-sync");
function financas() {
    const tipo = readline.question('Voce quer calcular juros simples ou composto ?: ').toLowerCase();
    const valorInicial = Number(readline.question('Informe o valor que voce quer calcular: '))
    const taxa = Number(readline.question('Informe a taxa: ')) / 100;
    const tempo = Number(readline.question('Informe a quantidade de meses: '))

    switch (tipo) {
        case 'simples':
            let jurosSimples = valorInicial * taxa * tempo;
            let montanteSimples = valorInicial + jurosSimples;
            console.log(`Juros Simples: ${jurosSimples}`);
            if (montanteSimples > 1000) {
                console.log(`Rendimento Total: ${montanteSimples.toFixed(2)}. Parabéns, excelente investimento !`)
            } else {
                console.log(`Rendimento Total: ${montanteSimples.toFixed(2)}`)
            }
            break;
        case 'composto': {
            let montanteComposto = valorInicial * Math.pow((1 + taxa), tempo);
            let jurosComposto = montanteComposto - valorInicial;
            console.log(`Juros: ${jurosComposto.toFixed(2)}`);
            if (montanteComposto > 1000) {
                console.log(`Rendimento Total: ${montanteComposto.toFixed(2)}. Parabéns, excelente investimento !`)
            } else {
                console.log(`Rendimento Total: ${montanteComposto.toFixed(2)}`);
            }

            break;
        }
        default:
            console.log(`Voce informou valores inválidos, tente novamente.`)
    }

}

module.exports = financas;

if (require.main === module) {
    financas();
}