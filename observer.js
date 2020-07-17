let observer = {
    obtenerOfertas: function(callback) {
        if(typeof callback === 'function') {
            this.subscribers[this.subscribers.length] = callback
        }
    },
    cancelarOfertas: function(callback) {
        for(let i = 0; i < this.subscribers.length; i++) {
            if(this.subscribers[i] === callback) {
                delete this.subscribers[i]
            }
        }
    },
    publicarOfertas: function(oferta) {
        for(let i = 0; i < this.subscribers.length; i++) {
            if(typeof this.subscribers[i] === 'function') {
                this.subscribers[i](oferta)
            }
        }
    },
    crear: function(objeto) {
        for (const i in this) {
            if (this.hasOwnProperty(i)) {
                objeto[i] = this[i]
                objeto.subscribers = []
            }
        }
    }
}

const udemy = {
    nuevoCurso: function() {
        const curso = 'Un nuevo curso de Python!'
        this.publicarOfertas(curso)
    }
}

const facebook = {
    nuevoAnuncio: function() {
        const anuncio = 'Compra un libro'
        this.publicarOfertas(anuncio)
    }
}

// Crear publicadores
observer.crear(udemy)
observer.crear(facebook)

const mad = {
    compartir: function(oferta) {
        console.log(`Mad, Excelente oferta! ${oferta}`);
    }
}

const ale = {
    interesa: function(oferta) {
        console.log(`Karen, Me interesa la oferta de ${oferta}`);
    }
}
// Aqui se suscribe a las ofertas
udemy.obtenerOfertas(mad.compartir)
udemy.obtenerOfertas(ale.interesa)
// Udemy agrega un nuevo curso
udemy.nuevoCurso()
// Aqui cancela la suscribcion
udemy.cancelarOfertas(mad.compartir)
udemy.nuevoCurso()

facebook.obtenerOfertas(ale.interesa)
facebook.nuevoAnuncio()
facebook.obtenerOfertas(mad.compartir)
facebook.nuevoAnuncio()