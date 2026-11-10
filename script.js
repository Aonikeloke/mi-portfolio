// Alternar modo oscuro / claro
const toggleButton = document.getElementById('toggle-theme');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});

// Desplegar tarjeta AMEMT
const cardAmemt = document.getElementById('card-amemt');

cardAmemt.addEventListener('click', () => {
    cardAmemt.classList.toggle('open');
});