function ConstructorSitios() {
    this.crearElemento = function(texto, tipo) {
        let html
        if(tipo === 'input') {
            html = new InputHTML(texto)
        } else if(tipo === 'img') {
            html = new ImagenHTML(texto)
        } else if(tipo === 'h1') {
            html = new HeadingHTML(texto)
        } else if(tipo === 'p') {
            html = new ParrafoHTML(texto)
        }

        html.tipo = tipo

        html.mostrar = function() {
            const elemento = document.createElement(this.tipo)

            if(this.tipo === 'input') {
                elemento.setAttribute('placeholder', this.texto)
            } else if(this.tipo === 'img') {
                elemento.setAttribute('src', this.texto)
            } else {
                elemento.appendChild(document.createTextNode(this.texto))
            }

            document.getElementById('app').appendChild(elemento)
        }

        return html
    }
}

const HeadingHTML = function(texto) {
    this.texto = texto
}

const InputHTML = function(texto) {
    this.texto = texto
}

const ImagenHTML = function(texto) {
    this.texto = texto
}

const ParrafoHTML = function(texto) {
    this.texto = texto
}

const sitioweb = new ConstructorSitios()

const elementosWeb = []

elementosWeb.push(sitioweb.crearElemento('Bienvenidos', 'h1'))
elementosWeb.push(sitioweb.crearElemento('Bienvenidos a mi nuevo sitio web', 'p'))

elementosWeb.push(sitioweb.crearElemento('logo.png', 'img'))
elementosWeb.push(sitioweb.crearElemento('Conocenos', 'h1'))

elementosWeb.push(sitioweb.crearElemento('Formulario', 'input'))
elementosWeb.push(sitioweb.crearElemento('Contactanos', 'h1'))

elementosWeb.forEach(element => {
    element.mostrar()
})