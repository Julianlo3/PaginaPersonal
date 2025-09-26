class GestionarContacto {
    constructor(repo) {
        this.repo = repo;
    }

    registrarContacto(nombre, email, telefono, motivo, mensaje, aceptaTermino, preferenciaContacto) {
        // calcular el próximo id
        const nextId = this.repo.Contactos.length > 0
            ? Math.max(...this.repo.Contactos.map(c => c.id)) + 1
            : 0;


        const fechaActual = new Date();
        const fechaCreacion = fechaActual.toLocaleDateString();
        const contacto = new Contacto(nextId, nombre, email, telefono, motivo, mensaje, aceptaTermino, preferenciaContacto, fechaCreacion, "N/A");
        this.repo.agregar(contacto);
        return contacto;
    }

    buscarPorId(id) {
        return this.repo.buscarPorId(id);
    }

    listarContactos() {
        return this.repo.obtener();
    }

    eliminarContacto(id) {
        const contacto = this.buscarPorId(id);
        if (!contacto) {
            console.log('No se puede eliminar el contacto porque no existe');
        } else {
            this.repo.eliminar(id);
        }
    }

    borrarTodo() {
        this.repo.eliminarTodo();
    }
}

const gestionarContacto = new GestionarContacto(ContactoRepo);