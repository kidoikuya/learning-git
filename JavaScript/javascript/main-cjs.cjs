// ▼ require関数の戻り値はモジュール内のmodule.exportsオブジェクト
const greeting = require("./greeting-cjs.cjs");
const name = "田中";
greeting.hello(name);
greeting.goodMorning(name);
greeting.goodEvening(name);
greeting.goodNight(name);

// ▼ オブジェクトの分割代入を利用して次のように記述することもできる
/*
const {
  hello: h,
  goodMorning: gm,
  goodEvening: ge,
  goodNight: gn
} = require("./greeting-cjs.cjs");
const name = "田中";
h(name);
gm(name);
ge(name);
gn(name);
*/