console.log ("Conversor de tempo");
    let segundos = 3670;

    let horas = (segundos / 3600);
    let minutos = ((segundos % 3600) / 60);
    let segundosRestantes = (segundos % 60);

        console.log(horas + " hora(s)");
            console.log(minutos + " minuto(s)");
                console.log(segundosRestantes + " segundo(s)");