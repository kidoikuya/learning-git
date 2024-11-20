// 元の配列データ
const fruits = ["Apple", "Orange", "Grape", "Strawberry", "Pineapple"];
// 新しく生成した ul要素 の挿入先となる div要素
const container = document.getElementById("container");
// ul要素 の生成
const ulElm = document.createElement("ul");
// 配列の要素数だけ繰り返し li要素 を生成する
for(const fruit of fruits){
    const liElm = document.createElement("li");
    // 配列の要素である文字列を li要素 のテキスト内容として設定する
    liElm.textContent = fruit;
    // ul要素の子要素として li要素 を追加する
    ulElm.append(liElm);
}
// div要素 の子要素として ul要素 を追加する
container.append(ulElm);