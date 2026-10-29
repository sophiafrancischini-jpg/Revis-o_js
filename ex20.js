let nomes = [];
let ra = [];
let medias = [];

let somaTurma = 0;

let maiorMedia = 0;
let menorMedia = 0;

let melhorAluno = '';
let piorAluno = '';

let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

for (let i = 0; i < 20; i++) {
    nomes[i] = prompt('Nome do aluno:');

    ra[i] = prompt('RA do aluno:');

    let n1 = Number(prompt('Nota 1:'));
    let n2 = Number(prompt('Nota 2:'));
    let n3 = Number(prompt('Nota 3:'));

    medias[i] = (n1 + n2 + n3) / 3;

    somaTurma = somaTurma + medias[i];

    if (i == 0) {
        maiorMedia = medias[i];
        menorMedia = medias[i];

        melhorAluno = nomes[i];
        piorAluno = nomes[i];
    }

    if (medias[i] > maiorMedia) {
        maiorMedia = medias[i];
        melhorAluno = nomes[i];
    }

    if (medias[i] < menorMedia) {
        menorMedia = medias[i];
        piorAluno = nomes[i];
    }

    if (medias[i] >= 7) {
        aprovados++;
    } else if (medias[i] >= 5) {
        recuperacao++;
    } else {
        reprovados++;
    }
}

let mediaTurma = somaTurma / 20;

let percentual = (aprovados / 20) * 100;

alert('Média da turma: ' + mediaTurma);

alert('Maior média: ' + maiorMedia);

alert('Menor média: ' + menorMedia);

alert('Aprovados: ' + aprovados);

alert('Recuperação: ' + recuperacao);

alert('Reprovados: ' + reprovados);

alert('Melhor aluno: ' + melhorAluno);

alert('Pior aluno: ' + piorAluno);

alert('Percentual de aprovação: ' + percentual + '%');

for (let i = 0; i < 20; i++) {
    alert('Aluno: ' + nomes[i] + '\nRA: ' + ra[i] + '\nMédia: ' + medias[i]);
}