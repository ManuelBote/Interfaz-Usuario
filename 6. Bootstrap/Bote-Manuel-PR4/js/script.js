$(document).ready(function () {

    //Toast
    intervalo = setInterval(() => {
        const cajaToast = bootstrap.Toast.getOrCreateInstance(document.getElementById("mensajeToast"));
        cajaToast.show();
        clearInterval(intervalo);
    }, 3000);


});  