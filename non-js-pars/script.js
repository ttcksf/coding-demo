const openBtn = document.querySelector('.openBtn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.closeBtn');
openBtn.addEventListener('click', () => {
  modal.showModal();
});
closeBtn.addEventListener('click', () => {
  modal.close();
});
