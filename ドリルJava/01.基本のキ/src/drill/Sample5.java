package drill;

import java.util.Optional;

public class Sample5 {

	public static void main(String[] args) {
		Optional<Integer> opt1= Optional.of(1);
//		Optional<Integer> opt2= Optional.of(null);  // NullPointerExeption が発生
		Optional<Integer> opt3= Optional.ofNullable(1);
		Optional<Integer> opt4= Optional.ofNullable(null);
		
		
//		System.out.println(opt1);
//		System.out.println(opt2);
		System.out.println(opt3);
		System.out.println(opt3.get());;
//		System.out.println(opt4);
		

	}

}
