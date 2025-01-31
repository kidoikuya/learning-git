{
    // ▼ 祖先オブジェクト
    const ancestorObj = {
      sayGoodbye: () => { console.log("Goodbye. (ancestorObj)") },
      sayGreat: () => { console.log("Great. (ancestorObj)") }
    }
    // ▼ 親オブジェクト
    const parentObj = {
      sayHello: () => { console.log("Hello. (parentObj)") },
      sayGreat: () => { console.log("Great. (parentObj)") }
    }
    // ▼ 祖先オブジェクトをプロトタイプ継承
    //    第一引数で指定したオブジェクトのプロトタイプを
    //    第二引数で指定したオブジェクトに変更する
    Object.setPrototypeOf(parentObj, ancestorObj);
    // ▼ 子オブジェクト
    const childObj = {};
    // ▼ 親オブジェクトをプロトタイプ継承
    Object.setPrototypeOf(childObj, parentObj);

    childObj.sayHello();  // 親オブジェクトのメソッドが呼び出される
    childObj.sayGoodbye(); // 祖先オブジェクトのメソッドが呼び出される
    // ▼ チェーン上でより近い位置にあるプロトタイプのメソッドが呼び出される
    childObj.sayGreat(); //親オブジェクトのメソッドが呼び出される
  }