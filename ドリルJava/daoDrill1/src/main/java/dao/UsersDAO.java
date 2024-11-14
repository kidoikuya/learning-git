package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.naming.InitialContext;
import javax.sql.DataSource;

import model.User;

public class UsersDAO {
	static DataSource ds;

	public Connection getConnection() throws Exception {
		if (ds == null) {  // 初回のみコンテキストからリソースを取得
			InitialContext ic = new InitialContext();
			ds = (DataSource) ic.lookup("java:comp/env/jdbc_sample");
		}
		return ds.getConnection();
	}
	
	public List<User> findAll(){
		String sql = "select * from users;";
		List<User> list = new ArrayList<>();
		try(
				Connection conn = getConnection();
				PreparedStatement pStmt = conn.prepareStatement(sql)
		){
			ResultSet rs = pStmt.executeQuery();
			while(rs.next()) {
				Integer id = rs.getInt("id");
				String name = rs.getString("name");
				list.add(new User(id, name));
			}
		}catch(SQLException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		return list;
	}
	
	public Optional<User> findById(Integer id){
		String sql = "select * from users where id = ?;";
		User user = null;
		try(
				Connection conn = getConnection();
				PreparedStatement pStmt = conn.prepareStatement(sql)
		){
			pStmt.setInt(1, id);
			ResultSet rs = pStmt.executeQuery();
			if(rs.next()) {
				String name = rs.getString("name");
				user = new User(id, name);
			}	
		}catch(SQLException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		return Optional.ofNullable(user);
	}
	
	public int save(User user) {
		String sql = "insert into users(name) values(?);";
		int result = 0;
		try(
				Connection conn = getConnection();
				PreparedStatement pStmt = conn.prepareStatement(sql)
		){
			pStmt.setString(1, user.getName());
			result = pStmt.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
		}catch(Exception e){
			e.printStackTrace();
		}
		return result;
	}

}