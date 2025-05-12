// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reviewForm');
    const reviewList = document.getElementById('reviewList');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = form.querySelector('input').value.trim();
        const review = form.querySelector('textarea').value.trim();
  
        if (name && review) {
          const reviewItem = document.createElement('div');
          reviewItem.classList.add('card');
          reviewItem.innerHTML = `<strong>${name}:</strong><p>${review}</p>`;
          reviewList.appendChild(reviewItem);
  
          form.reset();
        }
      });
    }
  });
  
  window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bgVideo');
  const bgImage = document.querySelector('.background-image-fallback');

  if (video && bgImage) {
    video.addEventListener('play', () => {
      setTimeout(() => {
        bgImage.classList.add('background-fade-out');
      }, 100); // short delay to ensure video begins
    });
  }
});
