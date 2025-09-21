class Contacto {
     static id = 0;

    constructor(nombre,email,telefono,motivo,mensaje,aceptaTermino,preferenciaContacto,fechaCreacion,fechaActualizacion) {
        this.id = Contacto.id;
        Contacto.id = Contacto.id+=1;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.motivo = motivo;
        this.mensaje = mensaje;
        this.aceptaTermino = aceptaTermino;
        this.preferenciaContacto = preferenciaContacto;
        this.fechaCreacion = fechaCreacion;
        this.fechaActualizacion = fechaActualizacion;
    }
}