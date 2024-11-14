import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/* ServletクラスとそれにアクセスするURLパターンを定義する。
http://localhost:8080/ExerciseServlet/*.actionが呼ばれたら、FrontControllerクラスの
doPostまたはdoGetを呼ぶ。どちらが呼ばれるかはHTTPメソッドの指定による */


@WebServlet(urlPatterns=("*.action"))
public class FrontController extends HttpServlet {
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			/* ex. /Login.action -> LoginActionに変換 */
			String path = request.getServletPath().substring(1);
			String name = path.replace(".a", "A").replace('/', '.');
			Action action = (Action)Class.forName(name).getDeclaredConstructor().newInstance();
			String url = action.execute(request,response);
			/* 返却されたurl(JSP)にforwardして処理をディスパッチする*/
			request.getRequestDispatcher(url).forward(request,response);
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	doPost(request,response);
	}
}