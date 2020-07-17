const Vendedor = function(nombre) {
    this.nombre = nombre
    this.sala = null
}

const Comprador = function(nombre) {
    this.nombre = nombre
}

Vendedor.prototype = {
    oferta: function(articulo, precio) {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function(comprador) {
        console.log(`Vendido a ${comprador}!`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador) {
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

// Mediador
const Subasta = function() {
    let compradores = {}

    return {
        registrar: function(usuario) {
            compradores[usuario.nombre] = usuario
            usuario.sala = this
        }
    }
}

// Instanciar
const mad = new Comprador('Mad')
const ale = new Comprador('Ale')
const lucho = new Comprador('Lucho')

const vendedor = new Vendedor('Vendedorin')

const subasta = new Subasta()
subasta.registrar(mad)
subasta.registrar(ale)
subasta.registrar(lucho)

vendedor.oferta('BMW 2000', 10000)
mad.oferta(15000, mad)
lucho.oferta(17000, lucho)
ale.oferta(22000, ale)
vendedor.vendido(ale.nombre)
