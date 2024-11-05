// 文字サイズの切り替えの対象となるp要素を取得
const text = document.getElementById("text");
// 各button要素を取得
const btnDefault = document.querySelector(".btn.default");  //「デフォルト」
const btnBig = document.querySelector(".btn.big");  // 「大」
// 「デフォルト」ボタンがクリックされたらclass属性にクラス名「big」を追加
btnDefault.addEventListener("click", ()=>{
  // 第２引数に false を指定した場合は削除のみを行う
  text.classList.toggle("big", false);
});
// 「大」ボタンがクリックされたらclass属性からクラス名「big」を削除
btnBig.addEventListener("click", ()=>{
  // 第２引数に true を指定した場合は追加のみを行う
  text.classList.toggle("big", true);
});