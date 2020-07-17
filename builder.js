class Formulario {
    constructor() {
        this.campos = []
    }

    agregarCampo(tipo, texto) {
        let campos = this.campos
        let campo

        switch (tipo) {
            case 'text': campo = new InputText(texto)
            break;
            
            case 'email': campo = new InputEmail(texto)
            break;

            case 'button': campo = new Boton(texto)
            break;

            default: throw new Error('Tipo no valido '+tipo);
        }

        campos.push(campo)
    }

    obtenerFormulario() {
        let form = document.createElement('form')
        let campos = this.campos.length
        let campo

        for(let i = 0; i < campos; i++) {
            campo = this.campos[i]
            form.appendChild(campo.crearElemento())
            let br = document.createElement('br')
            form.appendChild(br)
        }

        return form
    }
}

class Inputs {
    constructor(texto) {
        this.texto = texto
    }
}

class InputText extends Inputs {
    constructor(texto) {
        super(texto)
    }

    crearElemento() {
        const inputText = document.createElement('input')
        inputText.setAttribute('type', 'text')
        inputText.setAttribute('placeholder', this.texto)
        return inputText
    }
}

class InputEmail extends Inputs {
    constructor(texto) {
        super(texto)
    }

    crearElemento() {
        const inputEmail = document.createElement('input')
        inputEmail.setAttribute('type', 'email')
        inputEmail.setAttribute('placeholder', this.texto)
        return inputEmail
    }
}

class Boton extends Inputs {
    constructor(texto) {
        super(texto)
    }

    crearElemento() {
        const inputBoton = document.createElement('button')
        inputBoton.setAttribute('type', 'submit')
        inputBoton.textContent = this.texto
        return inputBoton
    }
}

// Instanciar formulario
const formulario = new Formulario()
formulario.agregarCampo('text', 'Name')
formulario.agregarCampo('text', 'Last')
formulario.agregarCampo('email', 'Email')
formulario.agregarCampo('button', 'Enviar')

console.log(formulario);

// Render en HTML
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').appendChild(formulario.obtenerFormulario())
})