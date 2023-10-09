function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

function preguntarNombreUsuario() {
    const nombreUsuario = prompt("Por favor, ingrese su nombre:");
    mostrarMensaje(`¡Bienvenido a nuestro ecommerce, ${nombreUsuario}!`);
    return nombreUsuario;
}

function preguntarCategoriaProducto() {
    let opcion;
    while (opcion !== "1" && opcion !== "2") {
        opcion = prompt("¿Qué desea comprar?\nElija la opción 1 si son remeras, opción 2 si son pantalones:");
    }
    return opcion;
}

function confirmarCompraProducto(categoria) {
    let producto = "";
    let precio = 0;

    if (categoria === "1") {
        producto = "remera";
        precio = 20; // Precio de la remera (puedes cambiarlo)
    } else if (categoria === "2") {
        producto = "pantalón";
        precio = 30; // Precio del pantalón (puedes cambiarlo)
    }

    const confirmacion = confirm(`Usted eligió ${producto}. Su precio es de $${precio}. ¿Desea comprar este artículo?`);

    if (confirmacion) {
        const direccionEnvio = prompt("Ingrese su dirección para realizar el envío del pedido:");
        mostrarMensaje(`Su artículo será enviado a: ${direccionEnvio}.`);
        mostrarMensaje("¡Muchas gracias por su compra!");
    } else {
        mostrarMensaje("¡Gracias por visitarnos!");
    }
}

function iniciarSimulador() {
    const nombreUsuario = preguntarNombreUsuario();
    const categoriaProducto = preguntarCategoriaProducto();
    confirmarCompraProducto(categoriaProducto);
}

iniciarSimulador();