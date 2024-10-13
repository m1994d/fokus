const html = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoque = document.querySelector('.app__card-button--enfoque');
const botonLargo = document.querySelector(' .app__card-button--largo');
const banner = document.querySelector('.app__image');

//Cambio color de interfaz e imagen !
botonCorto.addEventListener("click", () => {
    cambiarContecto('descanso-corto')
});

botonEnfoque.addEventListener("click", () => {
    cambiarContecto('enfoque')
});

botonLargo.addEventListener("click", () => {
    cambiarContecto('descanso-largo')
});

function cambiarContecto(contexto){
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagenes/${contexto}.png`)
}
