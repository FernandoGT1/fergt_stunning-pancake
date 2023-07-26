 // Obtener referencias a los elementos del carrusel
 const carousel = document.getElementById('myCarousel');
 const prevButton = carousel.querySelector('.carousel-control-prev');
 const nextButton = carousel.querySelector('.carousel-control-next');

 // Agregar eventos de clic a los botones
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

 //color de cuadros

 
    function changeColor(elementId, color) {
      var box = document.getElementById(elementId);
      box.style.color = color;
    }
    
    function changeTextColor(elementId, color) {
      var box = document.getElementById(elementId);
      box.style.backgroundColor = color;
    }
  