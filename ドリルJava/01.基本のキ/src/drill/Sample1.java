package drill;

public class Sample1 {

    public static void main(String args[]) {
        // char型（基本データ型）
        char c1 = 'a';
        char c2 = c1;    // c1のデータをc2にコピー
        c2 = 'b';    // c2のデータを'b'に変更
        System.out.println(c1 + ":" + c2);    // 各データを表示

        // char型の配列（オブジェクト型）
        char[] cArr1 = { 'a' };    // 要素が1つだけの配列を作成
        char[] cArr2 = cArr1;    // cArr1のデータをcArr2にコピー？
        cArr2[0] = 'b';    // cArr2の0番の要素を'b'に変更
        System.out.println(cArr1[0] + ":" + cArr2[0]);    // 0番の要素を表示
    }

}