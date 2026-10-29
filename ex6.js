let lado1 = Number(prompt('Digite o primeiro lado:'));
let lado2 = Number(prompt('Digite o segundo lado:'));
let lado3 = Number(prompt('Digite o terceiro lado:'));

if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
    alert('Não forma triângulo');
} else if (lado1 == lado2 && lado2 == lado3) {
    alert('Triângulo Equilátero');
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    alert('Triângulo Isósceles');
} else {
    alert('Triângulo Escaleno');
}