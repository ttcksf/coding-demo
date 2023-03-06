// スクロールをなくすコード
console.log(document);
document.addEventListener("DOMContentLoaded", () => {
  // iframe要素を取得
  const second = window.parent.document.querySelector("#second");
  // iframe要素の高さをページ全体の高さまで引き伸ばす
  second.style.height = document.body.scrollHeight + "px";
});
