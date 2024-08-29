const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('click', () => {
    // 対象外のものからopenedを外す
    items.forEach((item) => {
      item.classList.remove('opened');
    });
    // 対象にopenedをつける
    item.classList.add('opened');
  });
});
