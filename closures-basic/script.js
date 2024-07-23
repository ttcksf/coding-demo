function parent() {
  const num = 20;

  function child() {
    console.log(num);
  }
  return child;
}
// 通常の実行
// parent();

// returnがあることでparentを実行しなくてもchild()を定数に格納して単独で実行できる（クロージャー）
const result = parent();
// parent()としなくてもchild()が実行できているようなもの
result();
result();
result();
result();

// クロージャーはreactのuseEffectのリセット関数で見られる
function test() {
  return () => {
    console.log(100);
  };
}
const number = test();
number();
