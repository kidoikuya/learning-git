// テキスト入力欄のinput要素を取得
const inputText = document.getElementById("inputText");
// 追加ボタンのbutton要素を取得
const addBtn = document.getElementById("addBtn")
// 入力されたテキストの追加先となるul要素を取得
const list = document.getElementById("list");
// 追加ボタンのclickイベントにイベントハンドラを登録
addBtn.addEventListener("click", () => {
  // テキスト入力欄が空の場合は追加しない
  if (inputText.value) { 
    // li要素を生成し、入力された値をテキスト内容として設定する
    const liElm = document.createElement("li");
    liElm.textContent = inputText.value;
    list.append(liElm);
    // テキスト入力欄を空にする
    inputText.value = "";
  }
});