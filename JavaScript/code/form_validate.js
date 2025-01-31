document.addEventListener("DOMContentLoaded" , ()=>{
    const options = ["a","b","c"]; //optionsは配列なのでArrayだと型推論される。
    const optionElms = options.map((value)=>{
        // Array.prototype.mapがプロトタイプ継承で呼ばれる。
        // mapメソッドは配列の要素毎にvalueに入れてコールバック関数に渡す(今回は3回実行するということ)
        // コールバック関数を第一引数に受ける。
        // 第二でthisとして扱われる値を受ける。
        // ※省略時はundefinedになりthisを使う場合はエラーになる(使わなきゃOK)
        const elm = document.createElement("option");
        // HTML要素のoptionを生成、この時点ではDOM未登録状態。
        // 中身は<option></option>
        elm.setAttribute("value",value);
        // <option value="a"></option> 属性valueを追加、値はmapの引数の配列が入る
        elm.textContent = value;
        // <option value="a">a</option> テキスト内容が追加されてこの状態になる。
        return elm;
        //optionElmsに配列として返され、下記のようになる。
        /*[
            <option value="a">a</option>,
            <option value="b">b</option>,
            <option value="c">c</option>
        ]*/
    });
    document.querySelector("#field_kind").append(...optionElms);
    //スプレッド構文で配列を1つずつ引数に取り出し、appendでid=field_kindの要素の末尾に子要素を追加。
})

function handleEvent(event){
    const elm = event.target; //イベント発生した対象のDOM要素を取得
    console.log(elm.value , elm.id , elm.name);
    if(elm.value === "") return;
    const regexp = /^[1-9][0-9]{0,1}$/
    // 1~99にマッチする正規表現。変数名はRegular Expressionの略
    
    if(regexp.test(elm.value)){
        // 1～99の場合
        // .test() は正規表現のメソッド、引数の文字列が正規表現にマッチするか確認
        elm.classList.remove("error");
    }else{
        // 不一致
        elm.classList.add("error"); //エラーをクラス配列に追加(CSSが検知して発火する)
    }
}

document.querySelector("#field_age")           // 要素オブジェクトの取得
    .addEventListener("change" , handleEvent);  // イベントハンドラ登録

document.querySelector("#myform")
    .addEventListener("submit" , (event)=>{
        event.preventDefault();
        // preventDefault : イベントのデフォルト動作をキャンセル。
        // submitのデフォルト動作はaction属性で指定されたURLへフォームデータを送信すること。
        // action="#"は送信先が現在のURLなので、これが実行されるとリロードされる同期通信になる。
        // キャンセルするとリロードが発生しない、つまり非同期通信になる。
        alert("送信ボタンが押されました");
    });