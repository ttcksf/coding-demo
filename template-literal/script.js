const firstName = '山田';
const lastName = '太郎';
// console.log(`${firstName} ${lastName}さん`);

// function custom() {
//   return 'こんにちは';
// }

// ${}を除いた文字列が自動的に配列になって``直前に書いた関数名の引数になる
// function custom(str) {
//   console.log(str);
// }

// 第二引数以降を設定すると${}を取得できる
// function custom(str, fn, ln) {
function custom(str, ...val) {
  // console.log(str);
  // console.log(fn);
  // console.log(ln);
  // スプレッド構文にすると配列になる（${}の数を動的に変更できるようになる）
  console.log(val);
}
console.log(custom`${firstName} ${lastName}さん`);
console.log(custom`${firstName}さん`);
console.log(custom`${lastName}さん`);

// styled-componentに使われる技術
// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #bf4f74;
//   color: #bf4f74;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `;
