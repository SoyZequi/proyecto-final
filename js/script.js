// Función para animar las letras
function animateText() {
    const h3 = document.getElementById('animated-text');
    const text = h3.innerText;
    h3.innerHTML = text.split('').map((char, i) => 
        `<span style="display: inline-block; transition: transform 0.3s ease;">${char}</span>`
    ).join('');

    const spans = h3.querySelectorAll('span');

    // Aplicar animación a cada letra
    spans.forEach((span, i) => {
        setTimeout(() => {
            span.style.transform = 'translateY(-10px)';
        }, i * 50);
    });
    
    // Reiniciar animación
    setTimeout(() => {
        spans.forEach(span => {
            span.style.transform = 'translateY(0)';
        });
    }, 2000); // Después de 2 segundos, reinicia la animación
}

// Llamar a la función de animación al cargar la página
window.onload = function() {
    animateText();
};
