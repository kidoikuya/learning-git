package drill;

import java.util.List;

public class ForEach {

    public static void main(String[] args) {
        List<Integer> nums = List.of(1,2,3,4,5);
        nums.forEach((Integer num)->{
            System.out.println(num * num); // 1 4 9 16 25
        });
    }

}