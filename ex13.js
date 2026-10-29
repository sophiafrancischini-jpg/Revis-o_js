let maior = 0;
let menor = 0;
let soma = 0;

let maiores = 0;
let menores = 0;

for (let i = 1; i <= 15; i++) {
    let idade = Number(prompt('Digite a idade da pessoa ' + i + ':'));

    soma = soma + idade;

    if (i == 1) {
        maior = idade;
        menor = idade;
    }

    if (idade > maior) {
        maior = idade;
    }

    if (idade < menor) {
        menor = idade;
    }

    if (idade >= 18) {
        maiores++;
    } else {
        menores++;
    }
}

let media = soma / 15;

alert('Maior idade: ' + maior);

alert('Menor idade: ' + menor);

alert('Média das idades: ' + media);

alert('Quantidade de maiores de idade: ' + maiores);

alert('Quantidade de menores de idade: ' + menores);