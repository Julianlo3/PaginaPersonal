class ContactRepository{
    constructor(){
        const data = localStorage.getItem("contactos");
        try {
            this.Contactos = data ? JSON.parse(data) : [];
        } catch (e) {
            console.error("Error al leer contactos del localStorage:", e);
            this.Contactos = [];
        }
    }

    guardarEnStorage(){
       localStorage.setItem("contactos", JSON.stringify(this.Contactos));
    }

    agregar(Contacto){
        this.Contactos.push(Contacto);
        this.guardarEnStorage();
    }

    obtener(){
        return this.Contactos;
    }

    buscarPorId(id){
        return this.Contactos.find((contacto) => contacto.id === id);
    }


    eliminar(id){
        const indiceContacto = this.Contactos.findIndex(contacto => contacto.id === id);
        if (indiceContacto !== -1) {
            this.Contactos.splice(indiceContacto, 1);
            this.guardarEnStorage();
            console.log("Contacto eliminado");
        } else {
            console.log("Contacto no encontrado");
        }
    }

    modificar(Contacto){

    }

    eliminarTodo(){
        this.Contactos = [];
        this.guardarEnStorage();
        console.log("Todos los contactos eliminados");
    }
}

const ContactoRepo = new ContactRepository();