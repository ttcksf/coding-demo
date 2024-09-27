const button = document.querySelector('.button');
const rootElement = document.documentElement;

button.addEventListener('click', () => {
  rootElement.toggleAttribute('open');
});
