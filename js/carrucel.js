// Obtener referencias a los elementos del carrusel
const carousel = document.getElementById('myCarousel');
const prevButton = carousel.querySelector('.carousel-control-prev');
const nextButton = carousel.querySelector('.carousel-control-next');

// Agregar eventos de clic a los botones del carrusel
prevButton.addEventListener('click', function(event) {
  event.preventDefault();
  carouselPrev();
});

nextButton.addEventListener('click', function(event) {
  event.preventDefault();
  carouselNext();
});

// Función para mover el carrusel al elemento anterior
function carouselPrev() {
  const activeItem = carousel.querySelector('.carousel-item.active');
  const prevItem = activeItem.previousElementSibling || carousel.lastElementChild;

  activeItem.classList.remove('active');
  prevItem.classList.add('active');
}

// Función para mover el carrusel al siguiente elemento
function carouselNext() {
  const activeItem = carousel.querySelector('.carousel-item.active');
  const nextItem = activeItem.nextElementSibling || carousel.firstElementChild;

  activeItem.classList.remove('active');
  nextItem.classList.add('active');
}

// Función para crear el Footer
function createFooter() {
  // Código para crear el Footer (mismo código que antes)
  // ...

  document.body.appendChild(footer);
}

// Llamar a la función para crear el Footer
createFooter();

// Función para mostrar la alerta de "Hola mundo"
function showAlert() {
  alert('Hola mundo');
}

// Llamar a la función para mostrar la alerta de "Hola mundo" cuando la página cargue
window.onload = showAlert;


// Alerta de "Hola mundo" al cargar la página
window.addEventListener('load', function() {
    alert('¡Hola mundo!');
  });