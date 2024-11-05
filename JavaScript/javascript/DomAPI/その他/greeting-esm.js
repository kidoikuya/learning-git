function hello(name){
    console.log(`こんにちは、${name}さん。`);
  }
  export default hello;
  
  // ▼ 名前付きエクスポートする関数
  // 1. 朝の挨拶
  export function goodMorning(name){
    console.log(`おはよう、${name}さん。`);
  }
  // 2. 夕方の挨拶
  export function goodEvening(name){
    console.log(`こんばんは、${name}さん。`);
  }
  // 3. 就寝前の挨拶
  export function goodNight(name){
    console.log(`おやすみなさい、${name}さん。`);
  }