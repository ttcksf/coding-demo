function howOld(age) {
  // これは取得できる
  console.log(age);
  console.log(`私は${age}歳です`);
}
howOld(20);
// これは取得できない。{}の外にあるため
// console.log(age);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// これが取得できないのと同じこと
// console.log(i);

// スコープによって結果が変わるため注意
// またスコープによって定数の二重宣言のエラーにならないため注意
const firstName = 'tanaka';
// ここにあるとエラーになるがあまりやる人はいない
// const firstName = 'yamada';
function fullName() {
  const firstName = 'yamada';
  const lastName = 'taro';
  console.log(firstName + lastName);
}
fullName();
