package bean;

/* customer Beanを作成する */
/* 各フィールドを操作するためのセッターとゲッターを作成する */
public class Customer implements java.io.Serializable {
	private int id;
	private String loginId;
	private String password;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}