let horas = Number(prompt('Digite as horas trabalhadas:'));
let valorHora = Number(prompt('Digite o valor da hora:'));

let salarioBruto = horas * valorHora;

let inss = salarioBruto * 0.08;
let valeTransporte = salarioBruto * 0.06;
let imposto = salarioBruto * 0.075;

let salarioLiquido = salarioBruto - inss - valeTransporte - imposto;

alert('Salário bruto: ' + salarioBruto);

alert('Valor do INSS: ' + inss);

alert('Valor do Vale Transporte: ' + valeTransporte);

alert('Valor do Imposto de Renda: ' + imposto);

alert('Salário líquido: ' + salarioLiquido);