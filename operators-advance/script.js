const age = 10;

// AND条件
if (age >= 20 && age <= 65) {
  console.log('社会人です');
}
// 左がTrueだったら右を返す
age >= 20 && console.log('成人です');

const log1 = 'OK';
const log2 = 'OK';
// OR条件
if (log1 == 'OK' || log2 == 'OK') {
  console.log('正常です');
}
function handleLog(log) {
  // 左がtrueなら左を返して、それ以外は右を返す
  result = log || 'エラーです';
  console.log(result);
}
handleLog('OK');
handleLog(undefined);

function handleLogger(log) {
  // 左がnullかundefinedなら右を返して、それ以外は左を返す
  result = log ?? 'エラーです';
  console.log(result);
}
handleLogger('OK');
handleLogger(undefined);
