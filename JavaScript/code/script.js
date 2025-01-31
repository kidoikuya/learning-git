document.querySelector("#field_postcode")
        .addEventListener("change", handleChange);

async function handleChange(event){
    const elm = event.target;
    //.target : イベントが発生したDOM要素を取得
    // const elm = event;のままでは駄目なのは、eventの中身がDOM要素ではなくイベント情報が入ったオブジェクトだから。
    if(elm.value === "") return;
    const regexp = /^\d{7}$/; // 正規表現を書くことでデータがRegExpだと推論される。
    // \d = [0-9] /
    // スラッシュで囲むことで正規表現を直接作成することができる。
    if(regexp.test(elm.value)){ //.testはRegExp型のメソッド、正規表現で要素をチェック。
        // 非同期リクエスト送信
        try{
            const address = await requestZipcloud(elm.value);
            if(address){
                document.querySelector("#field_address").value = 
                `${address["address1"]}${address["address2"]}${address["address3"]}`;
            }else{
                document.querySelector("#field_address").value = "一致する住所がありません";
            }
        }
        catch(err){
            console.log(err);
        }       
    }else{
        // エラーメッセージの表示
        console.error("不正な郵便番号");
    }
}

async function requestZipcloud(address){
    const baseUrl = "https://zipcloud.ibsnet.co.jp/api/search";
    const url = `${baseUrl}?zipcode=${address}`;
    try{
        const response = await fetch(url, {method: "GET"});
        if(response.ok){
            const data = await response.json();
            const address = data?.["results"]?.[0];
            return address;
        }
        return null;
    }catch(err){
        console.error(err);
        return null;
    }
}