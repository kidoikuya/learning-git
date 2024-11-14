package drill;
import java.util.function.Function;

public class kansu {

	    public static void main(String[] args) {
	        Function<Integer, Integer> squareFunc = (Integer num)->{ return num * num; };
	        System.out.println(squareFunc.apply(9));  // 81
	    }

}