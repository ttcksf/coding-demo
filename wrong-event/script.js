const btn = document.querySelector('.btn');
const cards = document.querySelector('.cards');
const cardList = document.querySelectorAll('.card');

btn.addEventListener('click', () => {
  const card = document.createElement('div');
  card.classList.add('card');
  cards.append(card);
});
// 新しく追加されたカードには適用されない（cardListの要素取得が終わってしまっているから）
// cardList.forEach((card) => {
//   card.addEventListener('click', (e) => {
//     console.log(cardList);
//     card.classList.toggle('active');
//   });
// });

// cardListではなく要素全体にイベントをかける
document.addEventListener('click', (e) => {
  // これがないと全ての要素にactiveがついてしまう
  if (e.target.matches('.card')) {
    e.target.classList.toggle('active');
  }
});
