var header = document.getElementsByClassName("header");
var contenido = document.getElementsByClassName("contenido");
var footer = document.getElementsByClassName("footer");
var boton = document.getElementsByClassName("boton");

//Metodo para tema obscuro
function dark() {

    for (var i = 0; i < header.length; i++) {
        header[i].classList.remove("header-claro");
        header[i].classList.add("header-dark");
    }

    for (var i = 0; i < contenido.length; i++) {
        contenido[i].classList.remove("contenido-claro");
        contenido[i].classList.add("contenido-dark");
    }

    for (var i = 0; i < footer.length; i++) {
        footer[i].classList.remove("footer-claro");
        footer[i].classList.add("footer-dark");
    }

    for (var i = 0; i < boton.length; i++) {
        boton[i].classList.remove("boton-claro");
        boton[i].classList.add("boton-dark");
    }

}


//Metodo para tema claro
function normal() {

    for (var i = 0; i < header.length; i++) {
        header[i].classList.remove("header-dark");
        header[i].classList.add("header-claro");
    }

    for (var i = 0; i < contenido.length; i++) {
        contenido[i].classList.remove("contenido-dark");
        contenido[i].classList.add("contenido-claro");
    }

    for (var i = 0; i < footer.length; i++) {
        footer[i].classList.remove("footer-dark");
        footer[i].classList.add("footer-claro");
    }


}




//Asignacion de evento a los botones
document.getElementById('dark').addEventListener('click', dark);
document.getElementById('normal').addEventListener('click', normal);