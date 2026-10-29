let soma = 0;
let maior = 0;
let menor = 0;

let pares = 0;
let impares = 0;

let positivos = 0;
let negativos = 0;

for (let i = 1; i <= 20; i++) {
    let numero = Number(prompt('Digite o número ' + i + ':'));

    soma = soma + numero;

    if (i == 1) {
        maior = numero;
        menor = numero;
    }

    if (numero > maior) {
        maior = numero;
    }

    if (numero < menor) {
        menor = numero;
    }

    if (numero % 2 == 0) {
        pares++;
    } else {
        impares++;
    }

    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    }
}

let media = soma / 20;

alert('Soma: ' + soma);

alert('Média: ' + media);

alert('Maior número: ' + maior);

alert('Menor número: ' + menor);

alert('Quantidade de pares: ' + pares);

alert('Quantidade de ímpares: ' + impares);

alert('Quantidade de positivos: ' + positivos);

alert('Quantidade de negativos: ' + negativos);S