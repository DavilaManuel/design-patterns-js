// Creamos el NameSpace
const restaurApp = {}

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 15
    },
    {
        platillo: 'Hamburguesa',
        precio: 10
    },
    {
        platillo: 'Helado',
        precio: 7
    }
]

// Funciones
restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        }
        restaurApp.platillos.push(nuevo)
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenido a nuestro menu:`);
        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        });
    }
}

console.log(restaurApp);

const {platillos} = restaurApp
restaurApp.funciones.mostrarMenu(platillos)

restaurApp.funciones.ordenar(2)