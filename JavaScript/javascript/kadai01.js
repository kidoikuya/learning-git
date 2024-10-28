const timer = {
    time: 60_000,  // 計測時間（単位:ミリ秒）, 初期値として60秒を設定
    duration: 1_000,  // 残り時間の表示間隔（単位:ミリ秒）
    intervalId: null,  // インターバルID
    remainingTime: null,  // 残り時間（単位:ミリ秒）

    // ▼ 残り時間を表示するメソッド
    showRemainingTime(){
        console.clear();  // 過去の出力履歴をクリア
        console.log(this.remainingTime / 1_000);  // 残り時間（単位:秒）を出力
    },

    // ▼ 計測時間を設定するメソッド, 引数で渡される時間の単位は秒
    setTime(time){
        // 引数で渡された値が有効でない場合はエラーメッセージを出力
        if(typeof time !== "number"){ //typeがnumberか確認している
            console.log("TypeError:時間は数値で指定してください。");
            return;
        }else if(time < 1){
            console.log("RangeError:時間は1秒以上で指定してください。");
            return;
        }
        this.time = parseInt(time) * 1_000; //秒数入力→ミリ秒に変換している。parseIntで小数点以下を切り捨て
    },

    // ▼ 計測を開始するメソッド
    start(){
        // 既にタイマーが計測中の場合は先に動作を取り消す
        if(this.intervalId) clearInterval(this.intervalId); //clearIntervalは組み込み関数
        // 残り時間の設定と表示
        this.remainingTime = this.time;
        this.showRemainingTime();
        // 繰り返し処理の実行
        this.intervalId = setInterval(()=>{
            // 残り時間の減算と表示
            this.remainingTime -= this.duration;
            this.showRemainingTime();
            // 残り時間が0になったら取り消す
            if(this.remainingTime === 0){
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }, this.duration);
    }
}
// ▼ 動作確認用のテストコード
timer.setTime(10);
timer.start();