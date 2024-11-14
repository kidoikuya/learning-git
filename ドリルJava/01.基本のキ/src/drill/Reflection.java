package drill;

public class Reflection {

    public static void main(String[] args) {        
        try {
            Class<?> cinfo = Class.forName("java.lang.String");
            System.out.println(cinfo.getName());  // java.lang.String
            System.out.println(cinfo.getSimpleName());  // String
            System.out.println(cinfo.getPackage());  // package java.lang
            System.out.println(cinfo.getModule());  // module java.base
            System.out.println(cinfo.getSuperclass().getName());  // java.lang.Object
        }catch(ClassNotFoundException e) {
            e.printStackTrace();
        }        
    }

}
