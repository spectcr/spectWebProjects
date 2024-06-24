function handleScroll() {
    var scrollY = window.scrollY || window.pageYOffset;

    // Mostrar el mensaje cuando se haga suficiente scroll hacia abajo
    if (scrollY > 0) {
      document.getElementById('container-header').style.backgroundColor = '#45709bc7'
    } else {
      document.getElementById('container-header').style.backgroundColor = 'transparent';
    }
}

// Agregar el evento de scroll al objeto window
window.addEventListener('scroll', handleScroll);
