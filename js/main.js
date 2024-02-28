const Nombre_Asado = "ASADO";
const Nombre_Vacio = "VACIO";
const Nombre_Bondiola = "BONDIOLA";
const Nombre_Matambre = "MATAMBRE";
const Precio_Asado = 1600;
const Precio_Vacio = 1800;
const Precio_Bondiola = 1400;
const Precio_Matambre = 1700;

let opcion;
let cantidad;
let gastado;
let gastototal = 0;

const calcular_gastado = (cant, precio) => {
    let canttotal;
    if(cant >= 4 ){
        canttotal = cant * precio;
        canttotal  = canttotal - canttotal * 0.10;
        return canttotal;
    }else{
     canttotal = cant * precio;
    return canttotal;
    }    
}
const cartel = (total, carne) => {
    alert("Gastaste: $" + total + " en " + carne);
}
const cartel_final = (gastototal) =>{
    if(gastototal > 0 ){
        alert("Gracias por su Visita su Gasto TOTAL es de:$ " + gastototal);
    }else{
        alert("Gracias por su Visita");
    }
}

const pedido_carne = (carne,precio) => {
    do {
        cantidad = prompt("CANTIDAD DE " + carne + " EN KG:\n PRECIO POR KG:$ "+precio +"  \n Si compra 4kg o Mas se hace un descuento del 10%");
    } while (cantidad !== null && (isNaN(cantidad) || cantidad <= 0));
    return cantidad;
}

const pedido_general = (carne, precio) =>{
            cantidad = pedido_carne(carne,precio);
            gastado = calcular_gastado(cantidad,precio);
            cartel(gastado, carne);
            gastototal+=gastado;
}

do {
    do {
    opcion = prompt("ELIJA EL CORTE DE CARNE A COMPRAR: \n 1 "+Nombre_Asado+" \n 2 "+Nombre_Vacio+" \n 3 "+Nombre_Bondiola +" \n 4 "+Nombre_Matambre+" \n 0 SALIR");
    } while (opcion !== null && isNaN(opcion));

    switch (opcion) {
        case "1":
            pedido_general(Nombre_Asado , Precio_Asado);
            break;
        case "2":
           pedido_general(Nombre_Vacio, Precio_Vacio);
            break;
        case "3":
            pedido_general(Nombre_Bondiola,Precio_Bondiola);
            break;
        case "4":
            pedido_general(Nombre_Matambre,Precio_Matambre);
            break;
        case "0":
            cartel_final(gastototal);
            break;
        default:
            alert("Número incorrecto");
            break;
    }

} while (opcion !== "0");