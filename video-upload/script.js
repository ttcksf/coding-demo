const form = document.querySelector('.form');
const input = document.querySelector('.input');
const video = document.querySelector('.video');

input.addEventListener('change', (e) => {
  if (e.target.files[0]) {
    video.classList.add('active');
    video.src = URL.createObjectURL(e.target.files[0]);
    video.load();
  }
});
