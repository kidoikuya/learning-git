function createAddFunc(){
    return ()=>{
        // ▼ createAddFunc関数の実行時のスコープでthisは固定される
        console.log(this.num1 + this.num2);
    }
}

const obj1 = {
    num1: 1,
    num2: 2,
    createAddFunc: createAddFunc   //; 関数宣言済のcreateAddFuncをobj1のメソッドとして定義。
                                   //; プロパティ名と関数名が同じ場合は「createAddFunc」だけでも動く。
};

const obj2 = {
    num1: 3,
    num2: 4
}

console.log("obj1からcreateAddFuncを呼び出し");
console.log(obj1.createAddFunc()); // [Function (anonymous)] ←無名関数(アロー関数式)のオブジェクトが返されてることがわかる。
obj1.createAddFunc();   // これだとreturnで「アロー関数オブジェクト」が返されるだけなので何も出力されない。
obj1.createAddFunc()(); // 出力: 3
                        // 戻り値の「アロー関数式のオブジェクト」を即時実行関数式で呼び出している。
                        // アロー関数式が定義されたのはobj1の中ということ。

console.log("obj1.createAddFunc()→addに入れてから呼び出し");
const add = obj1.createAddFunc();  // 戻り値の「アロー関数式のオブジェクト」だけがaddに代入され、thisがobj1で固定される
console.log(add); //[Function (anonymous)] ←anonymousは無名関数という意味。
add(); // 出力: 3 ←無名関数を即時実行関数式の引数無し()で呼び出している。

console.log("bind,call,applyでthisをobj2に変更出来ない");
(add.bind(obj2))(); // 3 : 後からthisの参照先を変更できない
add.call(obj2); // 3 : 後からthisの参照先を変更できない
add.apply(obj2); // 3 : 後からthisの参照先を変更できない