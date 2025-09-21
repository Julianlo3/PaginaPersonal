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
        let estado = terminos.checked ? "Aceptado" : "Rechazado";
        
        gestionarContacto.registrarContacto(
            nombre, email, telefono, motivo, mensaje, estado, contactoSeleccionado
        );
        
        renderizarContactos();
        
        //formContacto.reset();

    } catch (error) {
        console.log(error.message);
        alert(error.message);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    renderizarContactos();
});

function renderizarContactos() {

        const contactos = gestionarContacto.listarContactos();
        const tbody = document.querySelector("#tbody");
        tbody.innerHTML = "";

        contactos.forEach(contacto => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
          <td>${contacto.id}</td>
          <td>${contacto.nombre}</td>
          <td>${contacto.email}</td>
          <td>${contacto.telefono}</td>
          <td>${contacto.motivo}</td>
          <td>${contacto.mensaje}</td>
          <td>${contacto.aceptaTermino}</td>
          <td>${contacto.preferenciaContacto}</td>
          <td>${contacto.fechaCreacion}</td>
          <td>${contacto.fechaActualizacion}</td>
          <td> <button onclick="eliminarTodo()">Eliminar todo</button> </td>
        `;
            tbody.appendChild(fila);
        });
}

function eliminarTodo() {
    gestionarContacto.borrarTodo();
    renderizarContactos();
}