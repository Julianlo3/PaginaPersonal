const formContacto = document.getElementById("formContacto");
const tablaContacto = document.getElementById("tablaContactos");

formContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const selectMotivo = document.getElementById("selectMotivo");
    const motivo = selectMotivo.options[selectMotivo.selectedIndex].text;
    const contactoSeleccionado = document.querySelector('input[name="contacto"]:checked').value;

    const mensaje = document.getElementById("mensaje").value;

    const terminos = document.getElementById("terminos");

    try {

        let estado;
        if (terminos.checked) {
            estado = "Aceptado";
        } else {
            estado = "Rechazado";
        }

        const Contacto = gestionarContacto.registrarContacto(nombre, email, telefono, motivo,mensaje,estado,contactoSeleccionado);
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${Contacto.nombre}</td>
        <td>${Contacto.email}</td>
        <td>${Contacto.telefono}</td>
        <td>${Contacto.motivo}</td>
        <td>${Contacto.mensaje}</td>
        <td>${Contacto.aceptaTermino}</td>
        <td>${Contacto.preferenciaContacto} </td>
        <td>${Contacto.fechaCreacion}</td>
        <td>${Contacto.fechaActualizacion}</td>
`;
        tablaContacto.appendChild(fila);
    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }

})