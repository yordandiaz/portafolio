document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de la navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});


  document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto

    // Mostrar el toast de éxito
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    // Redirigir a la página de agradecimiento después de 3 segundos
    setTimeout(function() {
      window.location.href = "https://tusitio.com/gracias.html"; // Cambia esta URL por la de tu página de agradecimiento
    }, 3000); // Espera 3 segundos antes de redirigir
  });
