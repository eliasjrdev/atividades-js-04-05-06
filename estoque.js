const produtos = [
    {
        id: 1,
        nome: "Notebook Dell Inspiron",
        categoria: "Eletrônicos",
        preco: 3500.00,
        quantidade: 10,
        ativo: true
    },
    {
        id: 2,
        nome: "Mouse Logitech MX Master",
        categoria: "Acessórios",
        preco: 450.00,
        quantidade: 2,
        ativo: true
    },
    {
        id: 3,
        nome: "Teclado Mecânico Redragon",
        categoria: "Acessórios",
        preco: 320.00,
        quantidade: 15,
        ativo: true
    },
    {
        id: 4,
        nome: "Monitor LG 24''",
        categoria: "Eletrônicos",
        preco: 900.00,
        quantidade: 8,
        ativo: true
    },
    {
        id: 5,
        nome: "Cadeira Gamer",
        categoria: "Móveis",
        preco: 1200.00,
        quantidade: 5,
        ativo: true
    },
    {
        id: 6,
        nome: "HD Externo 1TB",
        categoria: "Armazenamento",
        preco: 400.00,
        quantidade: 0,
        ativo: false
    },
    {
        id: 7,
        nome: "Pen Drive 64GB",
        categoria: "Armazenamento",
        preco: 80.00,
        quantidade: 50,
        ativo: true
    },
    {
        id: 8,
        nome: "Smartphone Samsung Galaxy",
        categoria: "Eletrônicos",
        preco: 2500.00,
        quantidade: 3,
        ativo: true
    }
];

const totalProdutos = produtos.reduce((total, itemAtual) => {
    return total + itemAtual.quantidade;
}, 0);

console.log(`Seu estoque tem ${totalProdutos} produtos no total.`);

let maior = produtos[0];

for (let i = 1; i < produtos.length; i++) {
    const atual = produtos[i];

    const valorAtual = atual.preco * atual.quantidade;
    const valorMaior = maior.preco * maior.quantidade;

    if (valorAtual > valorMaior) {
        maior = atual;
    }
}

const valorTotal = maior.preco * maior.quantidade;

console.log(`Seu produto com maior valor acumulado é o ${maior.nome} 
    com ${maior.quantidade} unidades em estoque e R$ ${valorTotal} total em estoque. `);

for(let i = 0; i < produtos.length; i++){
    const produtoAtual = produtos[i];

    if(produtoAtual.quantidade <= 3){
        console.log(`O produto ${produtoAtual.nome} tem tem ${produtoAtual.quantidade} unidades e precisa de reposição.`)
    }
}