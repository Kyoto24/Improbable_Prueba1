/*==================================================

    IMPROBABLE
    Mensajes del menú principal

==================================================*/

const messages = [

    "¿Te gu'tan lo' pate'lito?",

    "¿Eduardo estará abierto hoy...?",

    "Enserio... Saru es un nombre bacanisimo para una papita.",

    "Te apuesto a que no puedes decirme un mejor padre que Harold.",

    "El matchmaking de esta vaina no me gusta... Dijo una vez un Uber.",

    "¿Que te ha hecho la WASD...?.",

    "Raga e' un tiguere amistoso."

];

function mostrarMensajeAleatorio(){

    const paragraph = document.querySelector(".random-message");

    const randomIndex = Math.floor(Math.random() * messages.length);

    paragraph.textContent = messages[randomIndex];

}

const messageElement = document.querySelector(".random-message");

let currentMessage = 0;

function cambiarMensaje(){

    messageElement.classList.add("message-hidden");

    setTimeout(()=>{

        currentMessage++;

        if(currentMessage >= messages.length){

            currentMessage = 0;

        }

        messageElement.textContent = messages[currentMessage];

        messageElement.classList.remove("message-hidden");

    },600);

}

setInterval(cambiarMensaje,10000);