const html = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector(' .app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');
const inputEnfoqueMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sonidos/luna-rise-part-one.mp3');
const botonIniciarPausar = document.querySelector('#start-pause');

// Sonidos adicionales
const sonidoPlay = new Audio('./sonidos/play.wav');
const sonidoPause = new Audio('./sonidos/pause.mp3');
const sonidoBeep = new Audio('./sonidos/beep.mp3');

// Cronometro

let tiempoTranscurridoEnSegundos = 300; // 5 minutos por ejemplo
let idIntervalo = null;
let estaPausado = false;

// Contenedor del cronómetro en la interfaz
const displayCronometro = document.querySelector('#cronometro-display');

// Musica

musica.loop = true;

inputEnfoqueMusica.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

// Cambio color de interfaz e imagen
botonCorto.addEventListener("click", () => {
    cambiarContexto('descanso-corto')
    botonCorto.classList.add('active')
});

botonEnfoque.addEventListener("click", () => {
    cambiarContexto('enfoque')
    botonEnfoque.classList.add('active')
});

botonLargo.addEventListener("click", () => {
    cambiarContexto('descanso-largo')
    botonLargo.classList.add('active')
});

function cambiarContexto(contexto) {
    botones.forEach(function (contexto) {
        contexto.classList.remove("active")
    })

    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagenes/${contexto}.png`)

    switch (contexto) {
        case "enfoque":
            titulo.innerHTML = `Optimiza tu productividad,<br>
                <strong class="app__title-strong">sumérgete en lo que importa.</strong>`
            break;

        case "descanso-corto":
            titulo.innerHTML = `¿Qué tal tomar un respiro? <strong class="app__title-strong">¡Haz una pausa corta!</strong>`
            break;

        case "descanso-largo":
            titulo.innerHTML = `Hora de volver a la superficie <strong class="app__title-strong"> Haz una pausa larga.</strong>`
            break;
    }
}

// Función para convertir segundos a formato MM:SS
function formatoTiempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}

// Actualiza el cronómetro en la interfaz
function actualizarDisplayCronometro() {
    displayCronometro.innerHTML = formatoTiempo(tiempoTranscurridoEnSegundos);
}

const cuentaRegresiva = () => {
    if (tiempoTranscurridoEnSegundos <= 0) {
        reiniciar();
        sonidoBeep.play(); // Reproduce el sonido al finalizar
        alert("Tiempo final");
        return;
    }

    tiempoTranscurridoEnSegundos -= 1;
    actualizarDisplayCronometro(); // Actualiza la interfaz cada segundo
    console.log("Temporizador:" + tiempoTranscurridoEnSegundos);
}

botonIniciarPausar.addEventListener("click", iniciarPausar);

function iniciarPausar() {
    if (idIntervalo) {
        // Si está en marcha, pausar
        reiniciar();
        sonidoPause.play(); // Reproduce el sonido de pausa
    } else {
        // Si está pausado o sin iniciar, empezar o continuar
        sonidoPlay.play(); // Reproduce el sonido de inicio
        idIntervalo = setInterval(cuentaRegresiva, 1000);
    }
}

function reiniciar() {
    clearInterval(idIntervalo);
    idIntervalo = null;
}

// Inicializar el cronómetro en la interfaz
actualizarDisplayCronometro();
