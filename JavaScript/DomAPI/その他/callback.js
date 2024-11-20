function repeat(callbackFunc, repeatNum){
    for(let i = 0; i < repeatNum; i++){
      callbackFunc();
    }
  }
  function printAsterisk(){
    console.log("*")
  }
  // repeat(printAsterisk, 5);  // この行はコメントアウトする
  // ▼ アロー関数式でコールバック関数を定義して、そのまま引数として渡す
  repeat(()=>{
    console.log("*");
  }, 5);  // 上と同様に * が 5回出力される この5はrepeatNumに入る引数。