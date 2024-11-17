import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class LogoutAction implements Action {
	public String execute(
			HttpServletRequest request, HttpServletResponse response) throws Exception {
		HttpSession session = request.getSession();
		if (session.getAttribute("customer") != null) {
			/* ログインしている場合は、customer Beanを削除し、 
			                 “logout-out.jsp”をフォワード先に指定 */
			session.removeAttribute("customer");
			return "logout-out.jsp";
		}
		/* ログインしていない場合は、”logout-error.jsp”をフォワード先に指定 */
		return "logout-error.jsp";
	}
}