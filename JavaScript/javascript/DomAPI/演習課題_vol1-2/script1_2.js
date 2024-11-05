// 元のマップデータ
const map = new Map([
    ["画竜点睛", "物事を完成するために、最後に加える大切な仕上げのたとえ。"],
    ["一期一会", "一生に一度だけの機会。"],
    ["因果応報", "行為の善悪に応じて、その報いがあること。"],
    ["諸行無常", "この世の万物は常に変化して、ほんのしばらくもとどまるものはないこと。"],
  ]);
  // 新しく生成した dl要素 の挿入先となる div要素
  const container = document.getElementById("container");
  // dl要素 の生成
  const dlElm = document.createElement("dl");
  // 配列の要素数だけ繰り返し dt要素 と dd要素 を生成する
  for (const [key, value] of map) {
    const dtElm = document.createElement("dt");
    const ddElm = document.createElement("dd");
    // マップの要素であるキーと値を各要素のテキスト内容として設定する
    dtElm.textContent = key;
    ddElm.textContent = value;
    // dl要素の子要素として dt要素 と dd要素 を追加する
    dlElm.append(dtElm, ddElm);
  }
  // div要素 の子要素として dl要素 を追加する
  container.append(dlElm);