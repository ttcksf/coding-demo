const cards = document.querySelectorAll('.card');

// 1.監視している要素の表示状態が変化するたびに呼び出される
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // 3.監視対象が画面に見えたら(isIntersecting)、activeを追加する
    entry.target.classList.toggle('active', entry.isIntersecting);

    // 4.監視を辞める（アニメーションを止める時）
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
    }
  });
  // 2.
  // console.log(entries);
});
// 2.observeは監視対象を監視するメソッド（1つ目にactiveを追加するとコールバック関数内のconsole.logが実行される）
// observer.observe(cards[0]);

// 3.card全てを監視対象に追加するとアニメーションになる
cards.forEach((card) => {
  observer.observe(card);
});
