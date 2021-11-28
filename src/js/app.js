document.addEventListener('DOMContentLoaded', function() { //callback
    
    eventListeners();

    darkMode();
});

function darkMode() {
    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
}

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

    //OPCION2 PARA HACERLO 
    // navegacion.classList.toggle('mostrar')
}