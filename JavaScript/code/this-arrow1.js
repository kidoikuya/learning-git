function createAddFunc(){
    return ()=>{
        // ▼ createAddFunc関数の実行時のスコープでthisは固定される
        console.log(this.num1 + this.num2);
    }
}

const obj1 = {
    num1: 1,
    num2: 2,
    createAddFunc: createAddFunc
};

console.log(obj1);
console.log(obj1.createAddFunc());

const add = obj1.createAddFunc();  // この時点でthisがobj1で固定される
console.log(add);
add(); // 3


// (add.bind(obj2))(); // 3 : 後からthisの参照先を変更できない
// add.call(obj2); // 3 : 後からthisの参照先を変更できない
// add.apply(obj2); // 3 : 後からthisの参照先を変更できない