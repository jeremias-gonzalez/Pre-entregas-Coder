function mostrarCarrito() {
    // Obtener el carrito desde localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const carritoContainer = document.querySelector('.carrito-container');
    
    if (carrito.length === 0) {
        carritoContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        let total = 0;
        carritoContainer.innerHTML = '<h2>Productos en el Carrito</h2>';
        carrito.forEach((producto, index) => {
            total += producto.precio;
            carritoContainer.innerHTML += <p>${index + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)}</p>;
        });
        carritoContainer.innerHTML += <p><strong>Total: $${total.toFixed(2)}</strong></p>;
    }
}
