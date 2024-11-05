// 元の2次元配列データ
const data = [
    ["区分", "料金"],
    ["シルバー", "1,500円"],
    ["高校生以上", "1,800円"],
    ["中学生", "1,500円"],
    ["小学生", "1,000円"],
    ["幼児以下", "無料"]
];

// 新しく生成した table要素 の挿入先となる div要素
const container = document.getElementById("container");
// table要素 の生成
const tableElm = document.createElement("table");

// 外側の配列の要素数だけ繰り返し tr要素 を生成する
for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const trElm = document.createElement("tr");
    // 内側の配列の要素数だけ繰り返し th要素 または td要素 を生成する
    for (const cell of row) {
        // 最初の行だけ th要素 で、それ以外は td 要素 としてセルを生成する
        const tagName = i === 0 ? "th" : "td";
        const cellElm = document.createElement(tagName);
        // 内側の配列の要素である文字列をセルの要素のテキスト内容として設定する
        cellElm.textContent = cell;
        // tr要素 の子要素としてセルの要素を追加する
        trElm.append(cellElm);
    }
    // table要素 の子要素として tr要素 を追加する
    tableElm.append(trElm);
}

// div要素の子要素としてtable要素を追加する
container.append(tableElm);  // ここを修正
