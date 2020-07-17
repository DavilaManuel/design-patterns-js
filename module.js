const comprarBoleto = (function() {
    // Privado
    let evento = 'Conferencia Python'
    const adquirirBoleto = () => {
        const element = document.createElement('p')
        element.textContent = `Comprando boleta para: ${evento}`
        document.getElementById('app').appendChild(element)
    }

    // Publico
    return {
        mostrarBoleto: function() {
            adquirirBoleto()
        }
    }
})()

comprarBoleto.mostrarBoleto()