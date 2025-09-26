function validarNombre() {
    const input = document.getElementById("nombre");
    const error = document.getElementById("error-nombre");

    if (input.value.trim() === "") {
        error.innerText = "El nombre es obligatorio.";
        return false;
    }
    error.innerText = "";
    return true;
}

function validarEmail() {
    const input = document.getElementById("email");
    const error = document.getElementById("error-email");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(input.value.trim())) {
        error.innerText = "Ingrese un correo válido.";
        return false;
    }
    error.innerText = "";
    return true;
}

function validarTelefono() {
    const input = document.getElementById("telefono");
    const error = document.getElementById("error-telefono");
    const regex = /^[0-9]{7,10}$/;

    if (!regex.test(input.value.trim())) {
        error.innerText = "Ingrese un teléfono válido (7-10 dígitos).";
        return false;
    }
    error.innerText = "";
    return true;
}

function validarMotivo() {
    const select = document.getElementById("selectMotivo");
    const error = document.getElementById("error-motivo");

    if (select.value === "") {
        error.innerText = "Debe seleccionar un motivo.";
        return false;
    }
    error.innerText = "";
    return true;
}

function validarMensaje() {
    const input = document.getElementById("mensaje");
    const error = document.getElementById("error-mensaje");

    if (input.value.trim().length < 10) {
        error.innerText = "El mensaje debe tener al menos 10 caracteres.";
        return false;
    }
    error.innerText = "";
    return true;
}

function validarContacto() {
    const opciones = document.querySelectorAll('input[name="contacto"]');
    const error = document.getElementById("error-contacto");
    let seleccionado = false;

    opciones.forEach(radio => {
        if (radio.checked) seleccionado = true;
    });

    if (!seleccionado) {
        error.innerText = "Seleccione una preferencia de contacto.";
        return false;
    }
    error.innerText = "";
    return true;
}

function validarTerminos() {
    const input = document.getElementById("terminos");
    const error = document.getElementById("error-terminos");

    if (!input.checked) {
        error.innerText = "Debe aceptar los términos.";
        return false;
    }
    error.innerText = "";
    return true;
}

formContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    if ((validarNombre() && validarEmail() && validarTelefono() && validarMotivo() &&
        validarMensaje() && validarContacto() && validarTerminos()
    )) {
        console.log("probado");
    }
});
