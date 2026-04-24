const pedidos = [
    { id: 1, cliente: "Ana", valor: 120, status: "pago", itens: 3 },
    { id: 2, cliente: "Carlos", valor: 80, status: "pendente", itens: 1 },
    { id: 3, cliente: "Marina", valor: 450, status: "pago", itens: 7 },
    { id: 4, cliente: "João", valor: 30, status: "cancelado", itens: 1 },
    { id: 5, cliente: "Fernanda", valor: 220, status: "pago", itens: 4 },
    { id: 6, cliente: "Lucas", valor: 90, status: "pendente", itens: 2 },
    { id: 7, cliente: "Rafael", valor: 600, status: "pago", itens: 10 },
    { id: 8, cliente: "Juliana", valor: 75, status: "cancelado", itens: 1 },
    { id: 9, cliente: "Bruno", valor: 310, status: "pago", itens: 6 },
    { id: 10, cliente: "Patricia", valor: 50, status: "pendente", itens: 2 },
    { id: 11, cliente: "Aline", valor: 150, status: "pago", itens: 3 },
    { id: 12, cliente: "Gustavo", valor: 20, status: "cancelado", itens: 1 },
    { id: 13, cliente: "Bianca", valor: 700, status: "pago", itens: 12 },
    { id: 14, cliente: "Diego", valor: 110, status: "pendente", itens: 2 },
    { id: 15, cliente: "Renata", valor: 260, status: "pago", itens: 5 },
    { id: 16, cliente: "Eduardo", valor: 40, status: "cancelado", itens: 1 },
    { id: 17, cliente: "Camila", valor: 180, status: "pago", itens: 3 },
    { id: 18, cliente: "Felipe", valor: 95, status: "pendente", itens: 2 },
    { id: 19, cliente: "Larissa", valor: 520, status: "pago", itens: 8 },
    { id: 20, cliente: "Rodrigo", valor: 60, status: "cancelado", itens: 1 }
];



function relatorio(pedidos){
    let pedidosPagos = 0;
    let pedidosCancelados = 0;
    let pedidosPedentes = 0;
    let valorEstoque = 0;
    for(let i = 0; i < pedidos.length; i++){
        if(pedidos[i].status === "pago"){
            pedidosPagos += 1;
        }else if(pedidos[i].status === "cancelado"){
            pedidosCancelados += 1;
        }else{
            pedidosPedentes += 1;
        }

        valorEstoque += pedidos[i].valor;
    }

    console.log(`Sua lista tem ${pedidosPagos} pedidos pagos,
    ${pedidosPedentes} pendentes 
    e ${pedidosCancelados} cancelados.
    No total você tem R$ ${valorEstoque} reais em estoque.`)
}

relatorio(pedidos)