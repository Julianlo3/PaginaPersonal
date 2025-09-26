const formContacto = document.getElementById("formContacto");
const tablaContacto = document.getElementById("tablaContactos");

formContacto.addEventListener("submit", function (event) {
  event.preventDefault();

  if ((validarNombre() && validarEmail() && validarTelefono() && validarMotivo() &&
    validarMensaje() && validarContacto() && validarTerminos()
  )) {
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

      formContacto.reset();

    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }

    alert("Formulario enviado correctamente");
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


// Logica para el carrusel de imagenes
const imgs = document.querySelectorAll('.carrusel-img');
let idx = 0;

function showImg(i) {
  imgs.forEach((img, j) => {
    img.style.display = (j === i) ? 'block' : 'none';
  });
}

document.getElementById('prevBtn').onclick = function () {
  idx = (idx - 1 + imgs.length) % imgs.length;
  showImg(idx);
};
document.getElementById('nextBtn').onclick = function () {
  idx = (idx + 1) % imgs.length;
  showImg(idx);
};

showImg(idx);
