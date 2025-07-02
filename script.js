// Animación de desplazamiento suave para los enlaces del menú y botones
document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');

        // Si el href es "#inicio" o simplemente "#" (que a veces se usa para el tope)
        if (targetId === '#inicio' || targetId === '#') {
            // Desplazarse al tope absoluto de la página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else if (targetId && targetId.startsWith('#')) {
            // Para otros enlaces que apuntan a IDs específicos
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// En un futuro, podrías añadir lógica para el formulario de contacto,
// como enviar los datos a un servicio de backend (¡esto requiere más que solo JS frontal!)