function repeat(callbackFunc, repeatNum){
    for(let i = 0; i < repeatNum; i++){
      callbackFunc();
    }
  }

  repeat(()=>{
    console.log("*");
  }, 5);  // 上と同様に * が 5回出力される