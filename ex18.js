let numeros = [];

for (let i = 0; i < 20; i++) {
    numeros[i] = Number(prompt('Digite o número ' + (i + 1)));
}

let unicos = [];

for (let i = 0; i < 20; i++) {
    let existe = false;

    for (let j = 0; j < unicos.length; j++) {
        if (numeros[i] == unicos[j]) {
            existe = true;
        }
    }

    if (existe == false) {
        unicos[unicos.length] = numeros[i];
    }
}

for (let i = 0; i < unicos.length; i++) {
    alert('Número único: ' + unicos[i]);
}