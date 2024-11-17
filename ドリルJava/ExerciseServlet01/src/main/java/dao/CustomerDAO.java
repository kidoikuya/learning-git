package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import bean.Customer;

public class CustomerDAO extends DAO {
	/* ログイン名とパスワードからDBを検索 */
	public Customer search(String loginId, String password) throws Exception {
		Customer customer = null;
		/* DBとの接続 */
		Connection con = getConnection();
		/* SQL文の準備 */
		PreparedStatement st;
		st = con.prepareStatement(
				"select * from customer where binary login_id=? and binary password=?");
		st.setString(1, loginId);
		st.setString(2, password);
		/* SQL文の実行 */
		ResultSet rs = st.executeQuery();
		
		while (rs.next()) {
			/* DBに該当するlogin/passwordが見つかったら、customer Beanを 
			作成する */
			customer = new Customer();
			customer.setId(rs.getInt("id"));
			customer.setLoginId(rs.getString("login_id"));
			customer.setPassword(rs.getString("password"));
		}
		
		/* DBとの接続クローズ処理 */
		rs.close();
		st.close();
		con.close();
		return customer;
	}
}