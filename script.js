const html = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector(' .app__card-button--largo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botones = document.querySelectorAll('.app__card-button');

//Cambio color de interfaz e imagen !
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
