// 置き換えを使った記号、スペースの削除
// let image = 'image1.png';
// image = image.replace('1', '2');
// console.log(image);

let text = '田中　太郎';
text = text.replace('　', '');
console.log(text);

let zip = '610-0011';
zip = zip.replace('-', '');
console.log(zip);

let tel = '090-111-1111';
tel = tel.replaceAll('-', '');
console.log(tel);

// trimを使ったスペース削除（前後のスペースのみ）
// let name = ' 田中　太郎  ';
// name = name.trim();
// console.log(name);

// 前のみ
// let name = ' 田中　太郎  ';
// name = name.trimStart();
// console.log(name);
// 後ろのみ
let name = ' 田中　太郎  ';
name = name.trimEnd();
console.log(name);
