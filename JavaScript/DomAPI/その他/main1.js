// メインプログラムから Reservation クラスをインポートして利用する
import Reservation from "./reservation.js";
const reservation = new Reservation(1, new Date(), "Tanaka");
console.log(reservation.toString());