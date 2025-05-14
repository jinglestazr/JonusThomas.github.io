document.addEventListener('DOMContentLoaded', () => {
  // Toggle map cards
  const mapCards = document.querySelectorAll('.map-card');

  mapCards.forEach(card => {
    card.addEventListener('click', () => {
      const isActive = card.classList.contains('active');

      // Collapse all cards
      mapCards.forEach(c => c.classList.remove('active'));

      // Expand only if not already active
      if (!isActive) {
        card.classList.add('active');
      }
    });
  });
});
