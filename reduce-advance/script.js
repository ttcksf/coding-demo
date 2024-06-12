const cartItems = [
  { name: 'aaa', price: 100 },
  { name: 'bbb', price: 200 },
  { name: 'ccc', price: 300 },
];
// let total = 0;
// cartItems.forEach((item) => {
//   total += item.price;
// });
// console.log(total);

// 第二引数はアロー関数の第一引数の初期値になり、アロー関数の第一引数が最後に返される
let total = cartItems.reduce((current, item) => current + item.price, 0);
console.log(total);

const staff = [
  { name: 'yamada', lang: 'js' },
  { name: 'tanaka', lang: 'php' },
  { name: 'yoshida', lang: 'js' },
  { name: 'suzuki', lang: 'php' },
];
const result = staff.reduce((arr, person) => {
  const lang = person.lang;
  if (arr[lang] == null) arr[lang] = [];
  arr[lang].push(person.name);
  return arr;
}, {});
console.log(result);
