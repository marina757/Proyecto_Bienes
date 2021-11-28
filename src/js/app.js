document.addEventListener('DOMContentLoaded', function() { //callback
    
    eventListeners();
});

function eventListeners() {
   const mobileMenu = document.querySelector('.mobile-menu');

   mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion');
    
    //OPCION 1 PARA HACERLO
     if (navegacion.classList.contains('mostrar')) {
         navegacion.classList.remove('mostrar');
     }else {
         navegacion.classList.add('mostrar');
     }

    //OPCION2 PARA HACERLO no funciona?
    // navegacion.classList.toogle('mostrar')
}