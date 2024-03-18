const nombreYPrecio = [
    { Nombre: "ASADO", PRECIO: 2000 },
    { Nombre: "VACIO", PRECIO: 2500 },
    { Nombre: "BONDIOLA", PRECIO: 3000 },
    { Nombre: "LOMO", PRECIO: 3500 }
];

let opcionesMensaje = "";
let contador = 0;
nombreYPrecio.forEach(corte => {
    contador++;
    opcionesMensaje += contador + " - " + corte.Nombre + " - Precio: $" + corte.PRECIO + "\n";
});

const cantidadEnKgxCorte = {};
const precioTotalEnCorte = {};

let opcion;
let cantidadKG;
let maxKgVendidos = 0;
let corteMasVendido = "";
let cantidadMaxVendida = 0;
let maxPrecioTotal = 0;
let corteMasRecaudo = "";

function buscarMaximoVendido() {
    maxKgVendidos = 0;
    corteMasVendido = "";
    cantidadMaxVendida = 0;

    for (let corte in cantidadEnKgxCorte) {
        let precioTotal = Object.entries(cantidadEnKgxCorte).reduce((total, [nombre, cantidad]) => {
            const cortePrecio = nombreYPrecio.find(item => item.Nombre === nombre);
            return total + (cortePrecio.PRECIO * cantidad);
        }, 0);
        precioTotalEnCorte[corte] = precioTotal;

        if (cantidadEnKgxCorte[corte] > maxKgVendidos) {
            maxKgVendidos = cantidadEnKgxCorte[corte];
            corteMasVendido = corte;
            cantidadMaxVendida = cantidadEnKgxCorte[corte];
        }
    }
}

function buscarCorteMasRecaudo() {
    maxPrecioTotal = 0;
    corteMasRecaudo = "";

    Object.entries(cantidadEnKgxCorte).forEach(([corte, cantidad]) => {
        let precioTotal = cantidad * nombreYPrecio.find(item => item.Nombre === corte).PRECIO;
        precioTotalEnCorte[corte] = precioTotal;

        if (precioTotal > maxPrecioTotal) {
            maxPrecioTotal = precioTotal;
            corteMasRecaudo = corte;
        }
    });
}

function mensajeMuestraCompleta() {
        let mensajeCantidad = "Cantidad vendida por corte:\n";
        let mensajePrecio = "Precio total vendido por corte:\n";

    if (Object.keys(cantidadEnKgxCorte).length === 0) {
        mensajeCantidad="";
        mensajePrecio="";
        mensajeCantidad += "No hay información disponible.\n";
    } else {
    
        for (let corte in cantidadEnKgxCorte) {
            mensajeCantidad += `${corte}: ${cantidadEnKgxCorte[corte]} kg\n`;
            mensajePrecio += `${corte}: $${precioTotalEnCorte[corte]}\n`;
        }
    }
    if (mensajeCantidad.trim().length === 0 || mensajePrecio.trim().length === 0) {
        alert("No hay información disponible para mostrar.");
    } else {
        alert(mensajeCantidad + "\n" + mensajePrecio);
    }
}

do {
    opcion = prompt("Ingrese el corte de carne a comprar \n" + opcionesMensaje + "\n---------------- \n SALIR");

    if (/^[a-zA-Z]+$/.test(opcion)) {
        switch (opcion.toUpperCase()) {
            case nombreYPrecio[0].Nombre.toUpperCase():
                cantidadKG = parseFloat(prompt("Has seleccionado " + nombreYPrecio[0].Nombre + "\nEscriba la cantidad a comprar en kg:"));
                if (!isNaN(cantidadKG)) {
                    if (nombreYPrecio[0].Nombre in cantidadEnKgxCorte) {
                        cantidadEnKgxCorte[nombreYPrecio[0].Nombre] += cantidadKG;
                    } else {
                        cantidadEnKgxCorte[nombreYPrecio[0].Nombre] = cantidadKG;
                    }
                }
                break;
            case nombreYPrecio[1].Nombre.toUpperCase():
                cantidadKG = parseFloat(prompt("Has seleccionado " + nombreYPrecio[1].Nombre + "\nEscriba la cantidad a comprar en kg:"));
                if (!isNaN(cantidadKG)) {
                    if (nombreYPrecio[1].Nombre in cantidadEnKgxCorte) {
                        cantidadEnKgxCorte[nombreYPrecio[1].Nombre] += cantidadKG;
                    } else {
                        cantidadEnKgxCorte[nombreYPrecio[1].Nombre] = cantidadKG;
                    }
                }
                break;
            case nombreYPrecio[2].Nombre.toUpperCase():
                cantidadKG = parseFloat(prompt("Has seleccionado " + nombreYPrecio[2].Nombre + "\nEscriba la cantidad a comprar en kg:"));
                if (!isNaN(cantidadKG)) {
                    if (nombreYPrecio[2].Nombre in cantidadEnKgxCorte) {
                        cantidadEnKgxCorte[nombreYPrecio[2].Nombre] += cantidadKG;
                    } else {
                        cantidadEnKgxCorte[nombreYPrecio[2].Nombre] = cantidadKG;
                    }
                }
                break;
            case nombreYPrecio[3].Nombre.toUpperCase():
                cantidadKG = parseFloat(prompt("Has seleccionado " + nombreYPrecio[3].Nombre + "\nEscriba la cantidad a comprar en kg:"));
                if (!isNaN(cantidadKG)) {
                    if (nombreYPrecio[3].Nombre in cantidadEnKgxCorte) {
                        cantidadEnKgxCorte[nombreYPrecio[3].Nombre] += cantidadKG;
                    } else {
                        cantidadEnKgxCorte[nombreYPrecio[3].Nombre] = cantidadKG;
                    }
                }
                break;
            case "SALIR":
                buscarMaximoVendido();
                
                
                if (corteMasVendido !== "") {
                    alert("El gasto total de la venta es:" + precioTotalEnCorte[corteMasVendido]);
                    alert("El corte que más kg vendió es: " + corteMasVendido + " con " + cantidadMaxVendida + " kg vendidos.");
                } else {
                    alert("No se ha vendido nada de ningún corte.");
                }
                buscarCorteMasRecaudo();
                if (corteMasRecaudo !== "") {
                    alert("El corte que más recaudo es: " + corteMasRecaudo + " con una recaudacion total de $" + precioTotalEnCorte[corteMasRecaudo] + ".");
                } else {
                    alert("No hay información sobre el corte que mas recaudo.");
                }

                mensajeMuestraCompleta();
               
                alert("Saliendo del programa...");
                break;
            default:
                alert("Por favor, ingrese una opción válida.");
                break;
        }
    } else {
        alert("Por favor, ingrese solo palabras.");
    }

} while (opcion.toUpperCase() !== "SALIR");
