package test;

import dao.AccountsDAO;
import model.Account;
import model.Login;

public class AccountsDAOTest {
	public static void main(String[] args) {
		testFidnByLoginOK(); // ユーザが見つかる場合のテスト
		testFindByLoginNG(); // ユーザが見つからない場合のテスト
	}
	public static void testFidnByLoginOK() {
		Login login = new Login("minato","1234");
		AccountsDAO dao =new AccountsDAO();
		Account result = dao.findByLogin(login);
		if(result != null &&
			result.getUserId().equals("minato")&&
			result.getPass().equals("1234")&&
			result.getMail().equals("yusuke.minato@miyabilink.jp")&&
			result.getName().equals("湊 雄輔")&&
			result.getAge() == 23) {
			System.out.println("testFidnByLoginOK:成功しました");
		} else {
			System.out.println("testFidnByLoginOK:失敗しました");
		}
	}
	public static void testFindByLoginNG() {
		Login login = new Login("minato","12345");
		AccountsDAO dao = new AccountsDAO();
		Account result = dao.findByLogin(login);
		if(result == null) {
			System.out.println("testFidnByLoginNG:成功しました");
		} else {
			System.out.println("testFidnByLoginNG:失敗しました");
		}
	}
}