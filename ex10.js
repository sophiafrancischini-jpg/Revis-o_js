let anterior = 0;
let atual = 1;

alert('Fibonacci:');

alert(anterior);
alert(atual);

for (let i = 3; i <= 30; i++) {
    let proximo = anterior + atual;

    alert(proximo);

    anterior = atual;
    atual = proximo;
}