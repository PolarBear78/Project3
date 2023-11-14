let currentSlide = 0;
const videos = document.querySelectorAll('.slider video');

function showSlide(n) {
  videos.forEach(video => video.style.display = 'none');
  videos[currentSlide].style.display = 'block';
}

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = videos.length - 1;
  } else {
    currentSlide--;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  if (currentSlide === videos.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlide(currentSlide);
}

showSlide(currentSlide);
