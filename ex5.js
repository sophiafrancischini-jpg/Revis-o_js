let n1 = Number(prompt('Digite o primeiro número:'));
let n2 = Number(prompt('Digite o segundo número:'));
let n3 = Number(prompt('Digite o terceiro número:'));

let maior;
let menor;
let meio;

if (n1 >= n2 && n1 >= n3) {
    maior = n1;
} else if (n2 >= n1 && n2 >= n3) {
    maior = n2;
} else {
    maior = n3;
}

if (n1 <= n2 && n1 <= n3) {
    menor = n1;
} else if (n2 <= n1 && n2 <= n3) {
    menor = n2;
} else {
    menor = n3;
}

meio = n1 + n2 + n3 - maior - menor;

alert('Maior número: ' + maior);
alert('Número do meio: ' + meio);
alert('Menor número: ' + menor);