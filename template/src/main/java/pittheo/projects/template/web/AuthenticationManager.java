package pittheo.projects.template.web;

import javax.servlet.http.HttpSession;

import pittheo.projects.template.domain.UserAccount;

public class AuthenticationManager {

	public static boolean isUserLoggedIn(HttpSession session) {
		UserAccount loggedUser = (UserAccount)session.getAttribute("loggedUser");
		return loggedUser != null;
	}
	
}
