//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('boton').addEventListener("click", function () {
        let primerCampo = document.getElementById("email");
        let segundoCampo = document.getElementById("contraseña");
        let camposComp = true;

        if (primerCampo.value === "") {
            primerCampo.classList.add("Invalido");
            camposComp = false;
        } else {
            primerCampo.classList.remove("Invalido");
        }

        if (segundoCampo.value === '') {
            segundoCampo.classList.add("Invalido");
            camposComp = false;
        } else {
            segundoCampo.classList.remove("Invalido")
        }


    })

});
