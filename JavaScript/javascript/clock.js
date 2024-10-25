setInterval(()=>{
    // ▼ // 現在の時刻でDateオブジェクトのインスタンスを作成
    const date = new Date();
    const hours = date.getHours();  // 時
    const minutes = date.getMinutes();  // 分
    const seconds = date.getSeconds();  // 秒
    console.log(`${hours}:${minutes}:${seconds}`);  // コンソールに出力
  }, 1_000);