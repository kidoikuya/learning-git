package drill;

import java.util.ArrayList;
import java.util.List;

public class OoSample {
    public static void main(String args[]) {
        // 子クラスから親クラスで宣言されたメソッドを実行する
        Shinjin tanaka = new Shinjin("田中");
        tanaka.easyWork(); // 〇：自身のクラスのメソッドは実行できる
        // tanaka.advancedWork(); // ×：子クラス（Shunin）で宣言されたメソッドは実行できない
        // tanaka.managementWork(); //：× 子の子クラス（Kachou）で宣言されたメソッドは実行できない
        System.out.printf("\n"); // 改行
        
        Shunin suzuki = new Shunin("鈴木");
        suzuki.easyWork(); // 〇：親クラスから継承したメソッドは実行できる
        suzuki.advancedWork(); // 〇：自身のクラスのメソッドは実行できる
        // suzuki.managementWork(); //：× 子クラス（Shunin）で宣言されたメソッドは実行できない
        System.out.printf("\n");
        
        Kachou satou = new Kachou("佐藤");
        satou.easyWork(); // 〇：親の親クラスから継承したメソッドは実行できる
        satou.advancedWork(); // 〇：親クラスから継承したメソッドは実行できる
        satou.managementWork(); // 〇：自身のクラスのメソッドは実行できる
        System.out.printf("\n");
        
        // ※ 抽象クラスはnew演算子でインスタンスを作成することはできない
        // Shain shain = new Shain("社員");
        
        // 親クラスで宣言された変数には子クラスのインスタンスを代入できる
        // 〇：子クラス（Shunin） → 親クラス（Shinjin）
        Shinjin hontouhaShunin = new Shunin("矢部");
        // 〇：子クラス（Kachou） → 親クラス（Shunin）
        Shunin hontouhaKachou = new Kachou("服部");
        // 〇：子クラス（Kachou）→ 親の親クラス（Shinjin） 
        Shinjin hontouhaKachou2 = new Kachou("福田");
        
        // 子クラスで宣言された変数へは親クラスのインスタンスを代入できない
        // ×：親クラス（Shinjin） → 子クラス（Shunin）
        // Shunin usoShunin = new Shinjin("佐々木");
        // ×：親クラス（Shunin） → 子クラス（Kachou）
        // Kachou usoKachou = new Shunin("玉城");
        
        hontouhaShunin.doAllWorks(); // 実体である主任クラスのdoAllWorksメソッドが実行される
        System.out.printf("\n");
        hontouhaKachou.doAllWorks(); // 実体である課長クラスのdoAllWorksメソッドが実行される
        System.out.printf("\n");
        hontouhaKachou2.doAllWorks(); // 実体である課長クラスのdoAllWorksメソッドが実行される
        System.out.printf("\n");
       
        // hontouhaShunin.advancedWork();  // 親クラス（Shinjin）として扱われているため呼び出せない
        // hontouhaKachou.managementWork();  // 親クラス（Shunin）として扱われているため呼び出せない
        
        // 抽象クラスの変数ですべての継承先クラスのインスタンスを扱える
        Shain shain1 = new Shinjin("田所");
        Shain shain2 = new Shunin("新見");
        Shain shain3 = new Kachou("工藤");
        
        // Shainクラスとして全インスタンスを扱っているため（同一視）、同じリストに格納できる
        List<Shain> shainList = new ArrayList<>();	
        shainList.add(shain1);
        shainList.add(shain2);
        shainList.add(shain3);
        
        // 拡張for文で各要素のメソッドを実行。これも同一視したことにより可能。
        for (Shain shain : shainList) {
            // 抽象クラスで宣言された抽象メソッド（getRole, doAllWorks）を実行。
            // → 実際には実体であるインスタンスのクラスで宣言されたメソッドが実行される。
            System.out.printf("%sさんの役職は%sです。\n", shain.getName(), shain.getRole());
            shain.doAllWorks();
            System.out.printf("\n");
        }
        
        // インスタンスの元々のクラスにキャストしてメソッドを実行する。
        for (Shain shain : shainList) {
            // クラス名を確認してからキャストを行う。
            // getName()メソッドはFQCN（完全修飾クラス名）を返します。
            // そのため、例えばこのファイルが example パッケージの下にある場合は
            // "example.Shinjin" や "example.Shunin" と記述します。
            if("Shinjin".equals(shain.getClass().getName())){
                ((Shinjin)shain).easyWork();
            }
            if("Shunin".equals(shain.getClass().getName())){
                ((Shunin)shain).advancedWork();
            }
            if("Kachou".equals(shain.getClass().getName())){
                ((Kachou)shain).managementWork();
            }            
        }
    }
}
// !! OoSampleクラスの外側で宣言することに注意
abstract class Shain {
    // フィールド
    private String name;
    // コンストラクタ
    public Shain(String name) {
        this.name = name;
    }
    // メソッド
    public String getName() {
        return name;
    }
    // 抽象メソッド
    // これらのメソッドは継承したクラスで実装する
    public abstract String getRole();
    public abstract void doAllWorks();
}

class Shinjin extends Shain { // 社員を表す抽象クラスを継承
    // コンストラクタ
    public Shinjin(String name) {
        super(name); // 親クラス（Shain）のコンストラクタの呼び出し
    }
    // メソッド
    public void easyWork() {
        // 親クラスの（Shain）nameフィールドはprivateで制限されているため、直接アクセスはできない
        System.out.printf("%s：簡単な仕事をします。\n", getName());
    }
    @Override	// 親クラス（Shain）で宣言されている抽象メソッドを実装
    public String getRole() {
        return "新人";
    }
    @Override // 親クラス（Shain）で宣言されている抽象メソッドを実装
    public void doAllWorks() {
        easyWork();
    }
}

class Shunin extends Shinjin { // 新人を表すクラスを継承
    // コンストラクタ
    public Shunin(String name) {
        super(name); // 親クラス（Shinjin）のコンストラクタの呼び出し
    }
    //メソッド
    public void advancedWork() { // 主任クラスで出来る仕事（メソッド）を追加
        System.out.printf("%s：高度な仕事をします。\n", getName());
    }
    @Override	// 親クラス（Shinjin）で宣言されているメソッドをオーバーライド
    public String getRole() {
        return "主任";
    }
    @Override	// 親クラス（Shinjin）で宣言されているメソッドをオーバーライド
    public void doAllWorks() {
        super.doAllWorks(); // 親クラス（Shinjin）のdoAllWorks()を呼び出す
        advancedWork();	// このクラスで追加された仕事を行う
    }
}

class Kachou extends Shunin { // 主任を表すクラスを継承
    // コンストラクタ
    public Kachou(String name) {
        super(name); // 親クラス（Shunin）のコンストラクタの呼び出し
    }
    // メソッド
    public void managementWork() {
        System.out.printf("%s：マネジメントの仕事をします。\n", getName());
    }
    @Override	// 親クラス（Shunin）で宣言されているメソッドをオーバーライド
    public String getRole() {
        return "課長";
    }
    @Override	// 親クラス（Shunin）で宣言されているメソッドをオーバーライド
    public void doAllWorks() {
        super.doAllWorks(); // 親クラス（Shunin）のdoAllWorks()メソッドを呼び出す
        managementWork();	// このクラスで追加された仕事を行う
    }
}