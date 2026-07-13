/*==================================================

    IMPROBABLE
    Panel

    Responsabilidad:
    Abrir y cerrar el Panel.

==================================================*/

const panel = document.querySelector(".panel");

function abrirPanel(){

    panel.classList.add("active");

}

function cerrarPanel(){

    panel.classList.remove("active");

}





const panelButtons = document.querySelectorAll(".panel-option");

const contentBox = document.querySelector(".content-box");

panelButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        seleccionarApartado(button);

    });

});

function seleccionarApartado(button){

    activarApartado(button);

    mostrarContenido(button.dataset.topic);

}

function activarApartado(botonSeleccionado){

    panelButtons.forEach(button=>{

        button.classList.remove("active");

    });

    botonSeleccionado.classList.add("active");

}




function mostrarContenido(topic){

    const info = powerData[topic];

    contentBox.classList.add("content-hidden");

    setTimeout(()=>{

        contentBox.innerHTML=`

            <h2>${info.titulo}</h2>

            <p>${info.contenido}</p>

        `;

        contentBox.classList.remove("content-hidden");

    },250);

}

const backButton = document.querySelector(".back-button");

backButton.addEventListener("click", regresarAlMenu);

function regresarAlMenu(){

    cerrarPanel();

    restaurarMenu();

    cambiarAlModoAtardecer();

}


function restaurarMenu(){

    menuButtons.forEach(button=>{

        button.classList.remove("hide");
        button.classList.remove("active");
        button.classList.remove("fade-away");

    });

    logo.classList.remove("fade-out");

    message.classList.remove("fade-out");

}

