async function fetchData() {
  try {
    // const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const res = await fetch('https://jsonplaceholder.typicode.com/todos1');
    // const data = await res.json();
    // console.log(data);

    if (res.status == 200) {
      const data = await res.json();
      console.log(data);
    } else {
      // 404でもcatchに移動させる
      throw Error();
    }
  } catch (error) {
    // エラーを画面に表示したい
    // ここは500のエラーのみが実行される場所で404などの他のエラーは到達できない(コンソールには失敗した時点のエラーコードのみが表示される)
    alert('エラーです。管理者に連絡してください。');
  }
}
fetchData();
