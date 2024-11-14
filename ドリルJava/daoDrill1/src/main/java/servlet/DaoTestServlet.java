package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import dao.UsersDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.User;

@WebServlet("/DaoTestServlet")
public class DaoTestServlet extends HttpServlet {

	public static final long serialVersionUID = 1L;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/plain; charset=UTF-8");
		PrintWriter out = response.getWriter();

		UsersDAO usersDAO = new UsersDAO();

		// save() メソッドのテスト		
		if (usersDAO.save(new User(null, "Hanamura")) == 1) {
			out.println("新しいレコードを追加しました。");
		} else {
			out.println("レコードの追加に失敗しました。");
		}

		// findAll() メソッドのテスト
		usersDAO.findAll().forEach((User u) -> {
			out.println(u);
		});

		// findById() メソッドのテスト
		usersDAO.findById(1).ifPresentOrElse((User u) -> {
			out.println(u);
		},
		() -> {
			out.println("id=1のデータは見つかりませんでした。");
		});
		usersDAO.findById(1000).ifPresentOrElse((User u) -> {
			out.println(u);
		},
		() -> {
			out.println("id=1000のデータは見つかりませんでした。");
		});
	}
}