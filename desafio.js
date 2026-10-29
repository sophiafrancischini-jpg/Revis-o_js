let codigos = [];
let nomes = [];
let quantidades = [];
let precos = [];

// Cadastrar produto
function cadastrarProduto() {
    let codigo = Number(prompt('Digite o código do produto:'));
    let nome = prompt('Digite o nome do produto:');
    let quantidade = Number(prompt('Digite a quantidade:'));
    let preco = Number(prompt('Digite o preço:'));

    codigos[codigos.length] = codigo;
    nomes[nomes.length] = nome;
    quantidades[quantidades.length] = quantidade;
    precos[precos.length] = preco;

    alert('Produto cadastrado com sucesso!');
}

// Listar produtos
function listarProdutos() {
    if (nomes.length == 0) {
        alert('Nenhum produto cadastrado');
    } else {
        for (let i = 0; i < nomes.length; i++) {
            alert(
                'Código: ' +
                    codigos[i] +
                    '\nNome: ' +
                    nomes[i] +
                    '\nQuantidade: ' +
                    quantidades[i] +
                    '\nPreço: ' +
                    precos[i],
            );
        }
    }
}

// Procurar produto pelo código
function procurarProduto() {
    let codigo = Number(prompt('Digite o código do produto:'));

    let encontrado = false;

    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] == codigo) {
            alert(
                'Produto encontrado:' +
                    '\nNome: ' +
                    nomes[i] +
                    '\nQuantidade: ' +
                    quantidades[i] +
                    '\nPreço: ' +
                    precos[i],
            );

            encontrado = true;
        }
    }

    if (encontrado == false) {
        alert('Produto não encontrado');
    }
}

// Atualizar estoque
function atualizarEstoque() {
    let codigo = Number(prompt('Digite o código do produto:'));

    let encontrado = false;

    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] == codigo) {
            let novaQuantidade = Number(prompt('Digite a nova quantidade:'));

            quantidades[i] = novaQuantidade;

            alert('Estoque atualizado!');

            encontrado = true;
        }
    }

    if (encontrado == false) {
        alert('Produto não encontrado');
    }
}

// Vender produto
function venderProduto() {
    let codigo = Number(prompt('Digite o código do produto:'));

    let encontrado = false;

    for (let i = 0; i < codigos.length; i++) {
        if (codigos[i] == codigo) {
            let quantidadeVenda = Number(prompt('Quantidade vendida:'));

            if (quantidades[i] >= quantidadeVenda) {
                quantidades[i] = quantidades[i] - quantidadeVenda;

                alert('Venda realizada!');
            } else {
                alert('Quantidade insuficiente!');
            }

            encontrado = true;
        }
    }

    if (encontrado == false) {
        alert('Produto não encontrado');
    }
}

// Valor total do estoque
function valorTotalEstoque() {
    let total = 0;

    for (let i = 0; i < nomes.length; i++) {
        total = total + quantidades[i] * precos[i];
    }

    alert('Valor total do estoque: ' + total);
}

// Produto mais caro
function produtoMaisCaro() {
    if (nomes.length == 0) {
        alert('Nenhum produto cadastrado');
    } else {
        let maior = precos[0];
        let posicao = 0;

        for (let i = 1; i < precos.length; i++) {
            if (precos[i] > maior) {
                maior = precos[i];
                posicao = i;
            }
        }

        alert('Produto mais caro:' + '\nNome: ' + nomes[posicao] + '\nPreço: ' + precos[posicao]);
    }
}

// Produto com maior quantidade
function maiorQuantidade() {
    if (nomes.length == 0) {
        alert('Nenhum produto cadastrado');
    } else {
        let maior = quantidades[0];
        let posicao = 0;

        for (let i = 1; i < quantidades.length; i++) {
            if (quantidades[i] > maior) {
                maior = quantidades[i];
                posicao = i;
            }
        }

        alert(
            'Produto com maior quantidade:' +
                '\nNome: ' +
                nomes[posicao] +
                '\nQuantidade: ' +
                quantidades[posicao],
        );
    }
}

// Média dos preços
function mediaPrecos() {
    let soma = 0;

    for (let i = 0; i < precos.length; i++) {
        soma = soma + precos[i];
    }

    let media = soma / precos.length;

    alert('Média dos preços: ' + media);
}

// Menu principal

let opcao = 0;

while (opcao != 9) {
    opcao = Number(
        prompt(
            'SISTEMA DE ESTOQUE\n\n' +
                '1 - Cadastrar produto\n' +
                '2 - Listar produtos\n' +
                '3 - Procurar produto\n' +
                '4 - Atualizar estoque\n' +
                '5 - Vender produto\n' +
                '6 - Valor total do estoque\n' +
                '7 - Produto mais caro\n' +
                '8 - Produto com maior quantidade\n' +
                '9 - Encerrar\n' +
                '10 - Média dos preços',
        ),
    );

    switch (opcao) {
        case 1:
            cadastrarProduto();
            break;

        case 2:
            listarProdutos();
            break;

        case 3:
            procurarProduto();
            break;

        case 4:
            atualizarEstoque();
            break;

        case 5:
            venderProduto();
            break;

        case 6:
            valorTotalEstoque();
            break;

        case 7:
            produtoMaisCaro();
            break;

        case 8:
            maiorQuantidade();
            break;

        case 9:
            alert('Sistema encerrado');
            break;

        case 10:
            mediaPrecos();
            break;

        default:
            alert('Opção inválida');
    }
}