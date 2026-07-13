/*==================================================

    IMPROBABLE
    Menú Principal

==================================================*/

const menuButtons = document.querySelectorAll(".menu-button");

menuButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        iniciarTransicion(button);

    });

});

function activarBoton(botonSeleccionado){

    menuButtons.forEach(boton=>{

        if(boton===botonSeleccionado){

            boton.classList.add("active");

        }else{

            boton.classList.add("hide");

        }

    });

}