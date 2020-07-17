const alumnos = {
    // Todos los alumnos
    listaAlumnos: [],

    // Obtener alumno
    get: function(id) {
        console.log(id);
        return this.listaAlumnos[id]
    },

    // Crear alumno
    create: function(datos) {
        console.log(datos);
        this.listaAlumnos.push(datos)
    },

    // listar los alumnos
    listado: function() {
        return this.listaAlumnos
    }
}

const infoAlumno1 = {
    nombre: 'Mad',
    edad: 20,
}

const infoAlumno2 = {
    nombre: 'Ale',
    edad: 19
}

alumnos.create(infoAlumno1)
alumnos.create(infoAlumno2)

const listado = alumnos.listado()
console.log(listado);

const alumno = alumnos.get(1)
console.log(alumno);