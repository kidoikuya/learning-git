const obj = {
    name: "Taro",
    sayName: function () { // プロパティ名を基に、値である関数式はsayNameという関数として定義される。
      console.log(this.name);
    }
  };

  console.log(obj); // { name: 'Taro', sayName: [Function: sayName] }
  obj.sayName(); // taro ←オブジェクトのメソッドとして呼ぶ時は関数ブロックの外側のthisを探索する

  const newSayName = obj.sayName; // 関数が入ったプロパティsayNameの「値である関数式」だけ変数newSayNameに代入。
  console.log(newSayName);   // [Function: sayName] ←プロパティが消え、値だけが変数に入ってる状態。
                             // プロパティ名やオブジェクトのコンテキストは失われているから
                             // newSayName()で呼び出すとthisはグローバルオブジェクトを参照してundefinedとなる。 
  newSayName();     // undefined ←関数単体で呼ぶ時はグローバルスコープでthisを探索する