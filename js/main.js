const cortesDeCarne = {
    ASADO: { nombre: "ASADO", precio: 1600 },
    VACIO: { nombre: "VACIO", precio: 1800 },
    BONDIOLA: { nombre: "BONDIOLA", precio: 1400 },
    MATAMBRE: { nombre: "MATAMBRE", precio: 1700 },
    LOMO: { nombre: "LOMO", precio: 3000 }
  };
  
  let opcion;
  let cantidad;
  let gastado;
  let gastototal = 0;
  
  const calcular_gastado = (cant, precio) => {
      let canttotal = cant * precio;
      if (cant >= 4) {
          canttotal -= canttotal * 0.10;
      }
      return canttotal;
  }
  
  const cartel = (total, carne) => {
      alert("Gastaste: $" + total + " en " + carne);
  }
  
  const cartel_final = (gastototal) => {
      if (gastototal > 0) {
          alert("Gracias por su Visita. Su Gasto TOTAL es de: $" + gastototal);
      } else {
          alert("Gracias por su Visita");
      }
  }
  
  const pedido_carne = (carne) => {
      do {
          cantidad = prompt("CANTIDAD DE " + carne.nombre + " EN KG:\n PRECIO POR KG:$ " + carne.precio + "  \n Si compra 4kg o más se hace un descuento del 10%");
      } while (cantidad !== null && (isNaN(cantidad) || cantidad <= 0));
      return cantidad;
  }
  
  const pedido_general = (carne) => {
      cantidad = pedido_carne(carne);
      gastado = calcular_gastado(cantidad, carne.precio);
      cartel(gastado, carne.nombre);
      gastototal += gastado;
  }
  
  do {
      do {
          opcion = prompt("ELIJA EL CORTE DE CARNE A COMPRAR: \n 1 " + cortesDeCarne.ASADO.nombre + "\n 2 " + cortesDeCarne.VACIO.nombre + "\n 3 " + cortesDeCarne.BONDIOLA.nombre + "\n 4 " + cortesDeCarne.MATAMBRE.nombre + "\n 5 " + cortesDeCarne.LOMO.nombre + "\n 0 SALIR");
      } while (opcion !== null && (isNaN(opcion) || opcion < 0 ));
  
      switch (opcion) {
          case "1":
              pedido_general(cortesDeCarne.ASADO);
              break;
          case "2":
              pedido_general(cortesDeCarne.VACIO);
              break;
          case "3":
              pedido_general(cortesDeCarne.BONDIOLA);
              break;
          case "4":
              pedido_general(cortesDeCarne.MATAMBRE);
              break;
          case "5":
              pedido_general(cortesDeCarne.LOMO);
              break;
          case "0":
              cartel_final(gastototal);
              break;
          default:
              alert("Número incorrecto");
              break;
      }
  
  } while (opcion !== "0");
  