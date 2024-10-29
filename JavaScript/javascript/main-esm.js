import h from "./greeting-esm.js";
// ▼ goodMorning を省略して gm と別名を付ける 
import {goodMorning as gm, goodEvening, goodNight} from "./greeting-esm.js";
const name = "田中";
h(name);
gm(name);  // ◀ 別名で参照できる
goodEvening(name);
goodNight(name);
// ▼ 別名を付けたことで同じ名前を重複せずに宣言できる
const goodMorning = "おはようございます。";
console.log(goodMorning);