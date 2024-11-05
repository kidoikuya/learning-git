// メインプログラムから ReservationService クラスをインポートして利用する
import ReservationService from "./reservation-service.js";

const service = new ReservationService();

// 予約の受付(reserve メソッド)
const id1 = service.reserve("Tanaka");
const id2 = service.reserve("Yamamoto");

// 予約の検索（search メソッド）
const ids = [id1, id2, 100];
for (const id of ids){
    const reservation = service.search(id);
    if(reservation){
        console.log(reservation.toString());
    }else{
        console.log(`予約ID:${id}の情報はありません。`);
    }
}

// 予約の削除（delete メソッド）
service.delete(id1);
console.log(service.search(id1));  // undefined が出力される