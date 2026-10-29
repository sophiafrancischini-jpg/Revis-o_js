let valor = Number(prompt('Digite um valor inteiro:'));

let notas200 = parseInt(valor / 200);
valor = valor % 200;

let notas100 = parseInt(valor / 100);
valor = valor % 100;

let notas50 = parseInt(valor / 50);
valor = valor % 50;

let notas20 = parseInt(valor / 20);
valor = valor % 20;

let notas10 = parseInt(valor / 10);
valor = valor % 10;

let notas5 = parseInt(valor / 5);
valor = valor % 5;

let notas2 = parseInt(valor / 2);
valor = valor % 2;

let notas1 = valor;

alert('Notas de 200: ' + notas200);
alert('Notas de 100: ' + notas100);
alert('Notas de 50: ' + notas50);
alert('Notas de 20: ' + notas20);
alert('Notas de 10: ' + notas10);
alert('Notas de 5: ' + notas5);
alert('Notas de 2: ' + notas2);
alert('Notas de 1: ' + notas1);
alert('Notas de 1: ' + notas1);