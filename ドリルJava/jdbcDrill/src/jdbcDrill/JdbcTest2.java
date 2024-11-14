package jdbcDrill;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JdbcTest2 {

		public static void main(String[] args) {

			try{
				Class.forName("com.mysql.cj.jdbc.Driver");
			}catch(ClassNotFoundException e){
				throw new IllegalStateException("JDBCドライバを読み込めませんでした");
			}

			String url = "jdbc:mysql://localhost:3306/jdbc_sample";
			String user = "root";
			String password = "1234";
			
			String sqlOfSelect = "select * from users;";
			String sqlOfInsert = "insert into users(name) values(?);";  // ◀ INSERT命令のSQL文
			
			try(
				Connection conn = DriverManager.getConnection(url, user, password);
				PreparedStatement pStmtOfSelect = conn.prepareStatement(sqlOfSelect);
				PreparedStatement pStmtOfInsert = conn.prepareStatement(sqlOfInsert); // ◀ INSERT命令のステートメント
			){
				// ▼ INSERT命令のSQL文の実行
				pStmtOfInsert.setString(1,"Hirako"); // プレースホルダに値を設定
				int result = pStmtOfInsert.executeUpdate(); // ◀ INSERT命令のSQL文の実行, 戻り値は追加したレコード数
				System.out.println(String.format("%d件のレコードを追加しました。", result));
				
				ResultSet rs = pStmtOfSelect.executeQuery();
				while(rs.next()) {
					int id = rs.getInt("id");
					String name = rs.getString("name");
					System.out.println(String.format("id:%d, name:%s", id, name));
				}
			}catch(SQLException e){
				e.printStackTrace();
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	}