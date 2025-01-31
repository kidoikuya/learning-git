const obj = {
    name: "Taro",
    sayName: () => {
      console.log(this.name); // アロー関数の場合thisは外側のスコープを参照
    }
  };

  obj.sayName(); // undefined （グローバルスコープの this を参照）