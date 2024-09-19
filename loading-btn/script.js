const submitBtn = document.querySelector('.submitBtn');
const submitText = document.querySelector('.submitText');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  submitBtn.classList.add('loading');
  setTimeout(() => {
    submitBtn.classList.remove('loading');
    submitBtn.classList.add('success');
    submitText.innerHTML = '成功しました';
  }, 3000);
});
