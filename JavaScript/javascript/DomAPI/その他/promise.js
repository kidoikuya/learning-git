const url = "https://google.co.jp";  // リクエスト送信先のURL
const promise = fetch(url);  // 戻り値としてPromiseオブジェクトを返す
promise.then(response => {
  // サーバーからのレスポンスを正常に受信できた場合はこの関数が実行される
  // この関数にはレスポンス情報が格納された Response オブジェクトが渡される
  // ステータスコードがリクエストの成功を表す200番台の場合はokプロパティがtrueになる
  if(response.ok){
    console.log(`リクエストに成功しました。${response.status}`);
  }else{
    console.log(`リクエストに失敗しました。${response.status}`);
  }  
})
.catch(error => {
  // ドメインが存在しないなどの理由で正常なレスポンスが受信できなかった場合はこの関数が実行される
  console.error(error);
})
.finally(()=>{
  console.log("Promiseの処理が終了しました。")
});