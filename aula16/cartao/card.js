function mostrarVerso() {
    // document.getElementById('frente');
    frente.style.display = 'none'; //nao visivel
    verso.style.display = 'block'; //visivel
    
    verso.classList.add('animate__fadeInRight');
}

function mostrarFrente() {
    verso.style.display = 'none';
    frente.style.display = 'block';

    frente.classList.add('animate__fadeInRight');
}