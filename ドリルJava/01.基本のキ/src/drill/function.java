package drill;

import java.util.function.Function;

public class function {

    public static void main(String[] args) {        
        Function<String, String> kido = ori('o');
        System.out.println(kido.apply("kido"));
    }    
    
    public static Function<String,String> ori(char num){
    	return (String str) ->{
    		return "test".concat(String.valueOf(num));
    	};
    }    
}



/*
ori('o');で処理命令を返り値で受ける(処理結果では無いというのがポイント)
ちなみにoriは関数オブジェクト。
(String str) ->{
	return "test".concat(String.valueOf(num));
*/