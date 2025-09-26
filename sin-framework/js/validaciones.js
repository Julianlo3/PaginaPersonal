// Validaciones individuales
function validarNombre() {
    const nombre = document.getElementById("nombre");
    const error = document.getElementById("error-nombre");
    if (nombre.value.trim().length < 3) {
        error.textContent = "El nombre debe tener al menos 3 caracteres.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarEmail() {
    const email = document.getElementById("email");
    const error = document.getElementById("error-email");
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value.trim())) {
        error.textContent = "Ingrese un correo electrónico válido.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarTelefono() {
    const telefono = document.getElementById("telefono");
    const error = document.getElementById("error-telefono");
    const regex = /^[0-9]{7,10}$/;
    if (!regex.test(telefono.value.trim())) {
        error.textContent = "Ingrese un número válido (7 a 10 dígitos).";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarMotivo() {
    const motivo = document.getElementById("selectMotivo");
    const error = document.getElementById("error-motivo");
    if (motivo.value === "") {
        error.textContent = "Seleccione un motivo de consulta.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarMensaje() {
    const mensaje = document.getElementById("mensaje");
    const error = document.getElementById("error-mensaje");
    if (mensaje.value.trim().length < 10) {
        error.textContent = "El mensaje debe tener al menos 10 caracteres.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarContacto() {
    const contacto = document.querySelector('input[name="contacto"]:checked');
    const error = document.getElementById("error-contacto");
    if (!contacto) {
        error.textContent = "Seleccione una preferencia de contacto.";
        return false;
    }
    error.textContent = "";
    return true;
}

function validarTerminos() {
    const terminos = document.getElementById("terminos");
    const error = document.getElementById("error-terminos");
    if (!terminos.checked) {
        error.textContent = "Debe aceptar los términos para continuar.";
        return false;
    }
    error.textContent = "";
    return true;
}

// Validaciones en tiempo real (onBlur)
document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("telefono").addEventListener("blur", validarTelefono);
document.getElementById("selectMotivo").addEventListener("blur", validarMotivo);
document.getElementById("mensaje").addEventListener("blur", validarMensaje);
document.getElementById("terminos").addEventListener("blur", validarTerminos);
