// 文字色の切り替えの対象となるp要素を取得
const text = document.getElementById("text");
// 各button要素を取得
const redBtn = document.querySelector(".btn.red");
const greenBtn = document.querySelector(".btn.green");
const blueBtn = document.querySelector(".btn.blue");
const resetBtn = document.querySelector(".btn.reset");
// p要素のclass属性を指定された文字列（色を表すクラス名）に変更する関数
function changeTextColor(color){
  if(color){
    text.setAttribute("class", color);
  }else{
    // クラス名が指定されなかった場合はclass属性を削除
    text.removeAttribute("class");
  }  
}
// 各button要素のclcikイベントのイベントハンドラを登録
redBtn.addEventListener("click", ()=>{
  changeTextColor("red");
});
greenBtn.addEventListener("click", ()=>{
  changeTextColor("green");
});
blueBtn.addEventListener("click", ()=>{
  changeTextColor("blue");
});
resetBtn.addEventListener("click", ()=>{
  changeTextColor(null);
});