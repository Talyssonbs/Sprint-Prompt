import readlineSync from 'readline-sync';

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
let armazenado = armazena.sort(function (a, b) {
    let x = a.toUpperCase(),
        y = b.toUpperCase();
    return x == y ? 0 : x > y ? 1 : -1;
});
console.log(armazenado.join("\n"));