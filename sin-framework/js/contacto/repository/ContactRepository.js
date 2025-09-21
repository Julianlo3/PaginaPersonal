class ContactRepository{
    constructor(){
        this.Contactos=[];
    }

    agregar(Contacto){
        this.Contactos.push(Contacto);
    }

    obtener(){
        return this.Contactos;
    }

    buscarPorId(id){
        return this.Contactos.find((contacto) => contacto.id === id);
    }


    eliminar(id){
        const indiceContacto = this.Contactos.findIndex((contacto) => contacto.id === id);
            this.Contactos.splice(indiceContacto, 1);
            console.log('Contacto eliminado');
    }

    modificar(Contacto){

    }

    eliminarTodo(){
        this.Contactos.splice(-1);
    }
}

const ContactoRepo = new ContactRepository();