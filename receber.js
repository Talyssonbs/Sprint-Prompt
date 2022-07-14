import readlineSync from 'readline-sync';
/* program = readlineSync.question('Which program starts do you want? ', {
    defaultInput: 'firefox'
}); */
let armazena = []



while (true) {
    const pedido = readlineSync.question('Insira uma propriedade ! ');
    if (pedido.toLowerCase() === "sair") {
        break;
    }
    if (pedido === "") {
        console.log('Nenhuma propriedade inserida !!!')
    }
    if (pedido != "") {
        armazena.push(pedido);
    }
}
let armazenado = armazena.sort()
console.log(armazenado)