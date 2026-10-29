let quantidade = 0;
let total = 0;

let maior = 0;
let menor = 0;

let soma = 0;

while (true) {
    let preco = Number(prompt('Digite o preço do produto (0 para finalizar):'));

    if (preco == 0) {
        break;
    }

    quantidade++;

    total = total + preco;
    soma = soma + preco;

    if (quantidade == 1) {
        maior = preco;
        menor = preco;
    }

    if (preco > maior) {
        maior = preco;
    }

    if (preco < menor) {
        menor = preco;
    }
}

let media = soma / quantidade;

alert('Quantidade de produtos: ' + quantidade);

alert('Valor total: ' + total);

alert('Produto mais caro: ' + maior);

alert('Produto mais barato: ' + menor);

alert('Média dos preços: ' + media);