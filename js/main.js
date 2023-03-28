// Variables:
let costo = 0;
let precio1 = 500;
let precio2 = 800;
let precio3 = 1000;
let precio4 = 700;
let salida = false;
let costoProductos = 0;
let opcion;

// Funciones:
function cantidad() {
    let numeroValido = false;
    let numeroProductos = 0;

    while (numeroValido == false) {
        numeroProductos = parseInt(prompt("Ingresar la cantidad que deseas:"));

        if (numeroProductos > 0) {
            numeroValido = true;
            alert("Productos agregados correctamente");
        } else {
            alert("Error. Ingresaste un número no válido");
        }
    }

    return numeroProductos;
}

function precioCantidad(numero, precio) {
    return numero * precio;
}


// Programa carrito:
alert("Bienvenido a nuestra tienda!");

while (salida == false) {
    costoProductos = 0;
    opcion = prompt("Selecciona los productos que deseas agregar al carrito de compra. Para salir presiona x: \n1. Sombrero - $500 \n2. Camisa - $800 \n3. Hoodie - $1000 \n4. Shorts - $700 \n\nTotal en el carrito: $" + costo);

    if (opcion == "1") {
        costoProductos = precioCantidad(cantidad(), precio1);
    } else if (opcion == "2") {
        costoProductos = precioCantidad(cantidad(), precio2);
    } else if (opcion == "3") {
        costoProductos = precioCantidad(cantidad(), precio3);
    } else if (opcion == "4") {
        costoProductos = precioCantidad(cantidad(), precio4);
    } else if (opcion == "x" || opcion == "X") {
        salida = true;
    } else {
        alert("Opción no válida");
    }

    costo = costo + costoProductos;
}

alert("Los productos en tu carrito suman un total de: $" + costo);
