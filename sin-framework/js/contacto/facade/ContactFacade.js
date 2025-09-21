class GestionarContacto{
    constructor(repo){
        this.repo = repo;
    }

    registrarContacto(nombre,email,telefono,motivo,mensaje,aceptaTermino,preferenciaContacto){
        const fechaActual = new Date();
        const fechaCreacion = fechaActual.toLocaleDateString();
        const contacto = new Contacto(nombre,email,telefono,motivo,mensaje,aceptaTermino,preferenciaContacto,fechaCreacion,"N/A");
        this.repo.agregar(contacto);
        return contacto;
    }

    buscarPorId(id){
        this.repo.buscarPorId(id);
    }

    listarContactos(){
        return this.repo.obtener();
    }

    eliminarContacto(id){
        const contacto = this.buscarPorId(id);
        if(contacto===-1){
            console.log('No se puede eliminar el contacto porque no existe');
        }
        else{
            this.repo.eliminar(id);
        }
    }

    borrarTodo(){
        this.repo.eliminarTodo();
    }
}

const gestionarContacto = new GestionarContacto(ContactoRepo);