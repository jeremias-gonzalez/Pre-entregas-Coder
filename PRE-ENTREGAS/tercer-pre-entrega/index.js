const darkModeButton = document.querySelector('.darkmode-button');
const darkModeStylesheet = document.getElementById('darkmode-stylesheet');
const lightImage = document.getElementById('light-image');
const darkImage = document.getElementById('dark-image');


// Agregamos un manejador de eventos al botón
darkModeButton.addEventListener('click', () => {
   
    if (darkModeStylesheet.disabled) {
        darkModeStylesheet.disabled = false; // Habilita el modo oscuro
        lightImage.style.display = 'none'; // Oculta la imagen del modo claro
        darkImage.style.display = 'inline'; // Muestra la imagen del modo oscuro
    } else {
        darkModeStylesheet.disabled = true; // Deshabilita el modo oscuro
        darkImage.style.display = 'none'; // Oculta la imagen del modo oscuro
        lightImage.style.display = 'inline'; // Muestra la imagen del modo claro
    }
});

function agregarProducto(nombre, precio) {
    // Obtener el carrito actual desde localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agregar el nuevo producto al carrito
    carrito.push({ nombre, precio });

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`${nombre} agregado al carrito!`);
}



const productosContainer = document.getElementById('productos-container');
let productos = []; // Aquí se almacenarán los productos obtenidos de la API

// Función para obtener los productos desde la API
async function obtenerProductos() {
    try {
        const respuesta = await fetch('URL_DE_TU_API/productos');
        const data = await respuesta.json();
        productos = data.productos;
        mostrarProductos();
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
}

// Función para mostrar los productos en el contenedor
function mostrarProductos() {
    productosContainer.innerHTML = '';
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
        `;
        productosContainer.appendChild(card);
    });
}

// Función para ordenar los productos
function ordenarProductos() {
    const orden = document.getElementById('ordenar').value;
    productos.sort((a, b) => {
        const factor = orden === 'ascendente' ? 1 : -1;
        return factor * a.nombre.localeCompare(b.nombre);
    });
    mostrarProductos();
}

// Función para filtrar por oferta
function filtrarPorOferta() {
    const mostrarOfertas = document.getElementById('oferta').checked;
    if (mostrarOfertas) {
        const productosOferta = productos.filter(producto => producto.oferta);
        mostrarProductos(productosOferta);
    } else {
        mostrarProductos(productos);
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Lógica para agregar al carrito
    console.log(`Producto con ID ${idProducto} agregado al carrito.`);
}

// Al cargar la página, obtener y mostrar los productos
window.onload = () => {
    obtenerProductos();
};

