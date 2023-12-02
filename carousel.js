

//video carousell
const carousel = document.getElementById('video-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = carousel.children.length - 1;
  }
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  const translateValue = -currentIndex * 100 + '%';
  carousel.style.transform = 'translateX(' + translateValue + ')';
}