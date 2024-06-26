document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});
