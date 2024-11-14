package drill;
import java.lang.reflect.Constructor;

public class Reflection2 {
    public static void main(String[] args) {
        try {
            Class<?> cinfo = Person.class;
            Constructor<?> cons = cinfo.getDeclaredConstructor(String.class);
            Person person = (Person) cons.newInstance("Taro");  // 戻り値がObjectであるためキャストが必要
            System.out.println(person.getName());
        }catch(Exception e) {
            e.printStackTrace();
        }        
    }
}

class Person {
    private String name;

    Person(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}