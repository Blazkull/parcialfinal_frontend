// menu hamburguesa

document.querySelectorAll(".menu .ul_links .il_links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("menu_burger").checked = false;
  });
});

// menu filtro categorias

// Selecciona los botones de las categorías
const categories = document.querySelectorAll('.cateogiras button');
// Selecciona los divs de las carts por su clase contenedora
const carts = document.querySelectorAll('.container__trust .card__trust');

function renderCarts(category) {
  carts.forEach(cart => {
    if (category === 'all' || cart.classList.contains(category)) {
      // Mostrar el cart con animación
      cart.style.display = 'block'; 
      cart.classList.add('fade-in'); // Añadir animación de entrada
      cart.classList.remove('fade-out');
    } else {
      // Ocultar con animación
      cart.classList.add('fade-out'); // Añadir animación de salida
      cart.classList.remove('fade-in');
      setTimeout(() => {
        cart.style.display = 'none'; // Ocultar después de la animación
      }, 500); // Tiempo que dura la animación en milisegundos
    }
  });
}

// Agrega eventos a los botones
categories.forEach(button => {
  button.addEventListener('click', () => {
    // Remueve la clase "active" de todos los botones
    categories.forEach(btn => btn.classList.remove('active'));

    // Agrega la clase "active" al botón actual
    button.classList.add('active');

    // Obtén la categoría seleccionada
    const category = button.dataset.category;

    // Filtra los divs según la categoría
    renderCarts(category);
  });
});

// Mostrar todas las carts al cargar la página
renderCarts('all');




