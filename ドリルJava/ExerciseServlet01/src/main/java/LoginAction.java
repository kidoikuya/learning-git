import bean.Customer;
import dao.CustomerDAO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession; 
 
public class LoginAction implements Action { 
 public String execute( 
 HttpServletRequest request,HttpServletResponse response) throws Exception { 
 HttpSession session=request.getSession(); 
 
 Customer customer=(Customer)session.getAttribute("customer"); 
 if (customer!=null) { 
 return "login-out.jsp"; 
 } 
 
 String loginId =request.getParameter("loginId"); 
 String password =request.getParameter("password"); 
 CustomerDAO dao =new CustomerDAO(); 
 customer=dao.search(loginId, password); 
 
 if (customer!=null) { 
 session.setAttribute("customer",customer); 
 return "login-out.jsp"; 
 } 
 return "login-error.jsp"; 
 
 } 
 
}