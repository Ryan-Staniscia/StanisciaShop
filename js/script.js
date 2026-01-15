function filtrar(categoria) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (categoria === 'todos') {
            card.style.display = 'block';
        } else if (card.classList.contains(categoria)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 30px rgba(255,0,0,.4)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});
}
