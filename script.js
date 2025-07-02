// Aquí puedes añadir código JavaScript en el futuro, por ejemplo:

// Animación de desplazamiento suave para los enlaces del menú y botones
document.querySelectorAll('nav a, .btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Asegurarse de que el href no esté vacío y apunte a un ID
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// En un futuro, podrías añadir lógica para el formulario de contacto,
// como enviar los datos a un servicio de backend (¡esto requiere más que solo JS frontal!)