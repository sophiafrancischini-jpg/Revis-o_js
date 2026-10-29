let aposta = [];

for (let i = 0; i < 6; i++) {
    aposta[i] = Number(prompt('Digite o número da aposta:'));
}

let sorteados = [];

for (let i = 0; i < 6; i++) {
    let numero;

    do {
        numero = Math.floor(Math.random() * 60) + 1;
    } while (
        numero == sorteados[0] ||
        numero == sorteados[1] ||
        numero == sorteados[2] ||
        numero == sorteados[3] ||
        numero == sorteados[4] ||
        numero == sorteados[5]
    );

    sorteados[i] = numero;
}

let acertos = 0;

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        if (aposta[i] == sorteados[j]) {
            acertos++;
        }
    }
}

alert('Números sorteados:');

for (let i = 0; i < 6; i++) {
    alert(sorteados[i]);
}

alert('Quantidade de acertos: ' + acertos);