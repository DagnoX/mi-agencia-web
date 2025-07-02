// Aquí puedes añadir código JavaScript en el futuro, por ejemplo:

// Animación de desplazamiento suave para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// En un futuro, podrías añadir lógica para el formulario de contacto,
// como enviar los datos a un servicio de backend (¡esto requiere más que solo JS frontal!)