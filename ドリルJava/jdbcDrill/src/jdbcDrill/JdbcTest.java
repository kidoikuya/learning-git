package jdbcDrill;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JdbcTest {

	public static void main(String[] args) {

		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
		}catch(ClassNotFoundException e){
			throw new IllegalStateException("JDBCドライバを読み込めませんでした");
		}

		String url = "jdbc:mysql://localhost:3306/jdbc_sample";
		String user = "root"; // ◀ ユーザ名を入力
		String password = "1234";  // ◀ パスワードを入力
		
		String sqlOfSelect = "select * from users;";
		
		try(
			Connection conn = DriverManager.getConnection(url, user, password);
			PreparedStatement pStmtOfSelect = conn.prepareStatement(sqlOfSelect);
		){
			ResultSet rs = pStmtOfSelect.executeQuery();
			while(rs.next()) {
				int id = rs.getInt("id");
				String name = rs.getString("name");
				// 他のコードから取得したデータを利用する場合は、配列等に格納する
				System.out.println(String.format("id:%d, name:%s", id, name));
			}
		}catch(SQLException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}

//はんざつ