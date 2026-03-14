// js/script.js

// Por ahora solo un mensaje de consola (puedes agregar smooth scroll, validación de form, etc.)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio prototipo UTECO cargado correctamente');
});

// Ejemplo: smooth scroll para anclas internas (si las agregas después)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});