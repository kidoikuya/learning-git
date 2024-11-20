import fs from "fs";
const filePath = "weather.json";
try{
    const data = fs.readFileSync(filePath); //文字列 形式で取得
    const {  // オブジェクトの分割代入記法
        location: {
            name,
            localtime
        },
        current: {
            temp,
            condition
        }
    } = JSON.parse(data); //文字列で取得したJSONをオブジェクト形式に変換して分割代入している。
    console.log(`${localtime}頃の${name}の気温は${temp}℃、天候は${condition}です。`)
}catch(error){
    console.log(`${filePath}が読み込めません`);
    console.error(error);
}