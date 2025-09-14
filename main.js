//Sliding Carousel//
let currentSlide = 0;
const container = document.querySelector('.reviews-page--grid-container');
const totalSlides = document.querySelectorAll('.review-page--card').length;

function showSlide(index) {
  container.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 1500);

//Nav-Animation//

const nav = document.querySelector('.hero-page nav');
const navOffsetTop = nav.offsetTop;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY > navOffsetTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});