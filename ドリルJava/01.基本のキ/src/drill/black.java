package drill;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;


public class black {
	public static void main(String[] args) {
	}

	public List<Number> test(Set<CharSequence> s){
		return null;
	}
		
}

class black2 extends black{

	
//  スーパークラスのメソッド
//  public List<Number>       test(Set<CharSequence> s){return null;} 	
	
//  オーバーライド候補
//	public List<Object>       test(Set<CharSequence> s){return null;} // 型パラメータが変
//	public List<Integer>      test(Set<CharSequence> s){return null;} // IntegerはNumberのサブでは？
//	public ArrayList<Integer> test(Set<CharSequence> s){return null;} // 戻り値型も型パラメータもサブでは？
	public ArrayList<Number>  test(Set<CharSequence> s){return null;} //


//  オーバーロード候補
//	public List<Integer>      test(Set<String> s){return null;}      // 引数が継承関係にあるので(親と子の両方が同じ引数が受け取れるから)
	public List<Integer>      test(TreeSet<String> s){return null;}  // 引数が不一致＝オーバーロード

}