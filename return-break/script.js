function sumNum() {
  let a = 10;
  let b = 10;
  // 1. returnを追加しないと結果が返らない
  return a + b;
  // 2. ここは実行されない
  console.log('hello');
}
// console.log(sumNum());

const number = {
  // id: 100,
  id: null,
};

function ifFuncReturn(number) {
  // 3. {}と改行を省略する記法でもreturnは使われる
  // if (number?.id == null) {
  //   console.log('数字ではありません');
  // }
  if (number?.id == null) return console.log('数字ではありません');

  if (number.id < 50) {
    console.log('50より小さい');
  } else if (number.id < 100) {
    console.log('100より小さい');
  } else {
    console.log('101より大きい');
  }
}

ifFuncReturn(number);

const arr = ['a', 'a', 'b', 'a', 'a', 'a'];
for (let i = 0; i < arr.length; i++) {
  console.count(arr[i]);
  // 4. 特定の条件で止めることで無駄なループをしなくてよくなる
  if (arr[i] === 'b') {
    break;
  }
}
