// A
// console.log("5秒を計測します。");
// setTimeout( ()=>{ console.log("5秒が経過しました。");}, 5_000);

// B
// const livingThings = [
//   {name: "サンショウウオ", species: "amphibian"},
//   {name: "ワニ", species: "reptiles"},
//   {name: "ヘビ", species: "reptiles"},
//   {name: "カエル", species: "amphibian"},
//   {name: "トカゲ", species: "reptiles"},
//   {name: "イモリ", species: "amphibian"},
//   {name: "カメ", species: "reptiles"}
// ];

// livingThings.forEach(item => {
//   // speciesが"amphibian"の場合に名前を出力
//   if (item.species === "amphibian") {
//     console.log(item.name);
//   }
// });

// C
const myArr = {
  elements: [1, 2, 3, 4],
  myMap(callback){
    const newArr = [];
    for(const e of this.elements){
      newArr.push(callback(e));
    }
    return newArr;
  }
}

const newArr = myArr.myMap(e => e * 2);
console.log(newArr);
