const mainScreen = document.querySelector(".main-screen");

function cambiarAlModoNoche(){

    mainScreen.classList.add("night-mode");

}

function cambiarAlModoAtardecer(){

    mainScreen.classList.remove("night-mode");

}
window.addEventListener("load", () => {

    mostrarMensajeAleatorio();

});
   

       