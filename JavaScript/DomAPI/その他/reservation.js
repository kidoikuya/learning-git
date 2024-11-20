export default class Reservation {
    #id;  // 予約ID
    #date;  // 予約受付日
    #name;  // 名前

    // コンストラクタ
    constructor(id, date, name){
        this.#id = id;
        this.#date = date;
        this.#name = name;
    }
    
    // 各フィールドのゲッター／セッター
    get id(){
        return this.#id;
    }
    get date(){
        return this.#date;
    }
    get name(){
        return this.#name;
        }
    set date(newDate){
        this.#date = newDate;
    }

    // 予約情報を表す文字列を返すメソッド
    toString(){
        const id = this.id;
        const name = this.name;
        const date = `${this.date.getFullYear()}年${this.date.getMonth()+1}月${this.date.getDate()}日`;
        // return `[id:${id}, date:${date}, name:${name}]`;
        return `[id:${this.id}, date:${date}, name:${this.name}]`;
    }
}