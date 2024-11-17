import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoginAgainAction implements Action {
	@Override
	public String execute(
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		/* “login-in.jsp”をフォワード先に指定 */
		return "login-in.jsp";
	}

}