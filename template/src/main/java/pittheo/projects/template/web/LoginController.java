package pittheo.projects.template.web;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.util.UriUtils;
import org.springframework.web.util.WebUtils;

import pittheo.projects.template.domain.UserAccount;
import pittheo.projects.template.utils.Utilities;

@Controller
public class LoginController {
	
	@RequestMapping(value="/login", method = RequestMethod.POST)
    public String doLogin(@RequestParam String username, @RequestParam String password, Model model, HttpSession session, SessionStatus sessionStatus) {
		String message = null;
		
		UserAccount loggedInUser = checkLogin(username, password);
		
		if (loggedInUser != null) {
			System.out.println("***Login successful!***");
			session.setAttribute("loggedIn", true);
			session.setAttribute("loggedUser", loggedInUser);
			
			return "redirect:/stelexi";
		} else {
			System.out.println("Login failed!");
			message = "Εσφαλμένο όνομα χρήστη ή κωδικός πρόσβασης. Προσπαθήστε ξανά.";
			model.addAttribute("message", message);
			return "login";
		}
    }
	
	@RequestMapping(value="/logout")
    public String doLogout(@RequestParam Long userId, Model model, HttpSession session) {
		String message = null;
		
		UserAccount userToLogout = UserAccount.findUserAccount(userId);
		
		if (userToLogout != null) {
			System.out.println("***Logging out user " + userToLogout.getUsername() + "...");
			System.out.println("***User logged out successfully!***");
			session.removeAttribute("loggedIn");
			session.removeAttribute("loggedUser");
			session.invalidate();
			
			return "redirect:/login";
		} else {
			System.out.println("Logout failed!");
			message = "Ουυυπς. Δεν μπορέσαμε να σας αποσυνδέσουμε. Παρακαλούμε προσπαθήστε ξανά αργότερα.";
			model.addAttribute("message", message);
			return "redirect:/stelexi";
		}
    }
	
	
	@RequestMapping(value="/signup", params = "form", method = RequestMethod.GET)
    public String signupForm(Model model, HttpSession session, HttpServletRequest request, SessionStatus sessionStatus) {
		if(!AuthenticationManager.isUserLoggedIn(session)) {
			return "redirect:/login?form";
		}
		
        boolean inCreateMode = (request.getParameter("userId") == null || "".equals(request.getParameter("userId")) && "true".equals(request.getParameter("createMode"))); 
        boolean inEditMode = request.getParameter("userId") != null && "true".equals(request.getParameter("editMode"));
		
        if (inCreateMode) {
        	System.out.println("PURE CREATION!");
        	model.addAttribute("user", new UserAccount());
        	model.addAttribute("createMode", true);
        } else if (inEditMode) {
        	System.out.println("**** in Edit mode!");
        	Long userId = Long.parseLong(request.getParameter("userId"));
        	model.addAttribute("user", UserAccount.findUserAccount(userId));
        	model.addAttribute("editMode", true);
        }
		
		model.addAttribute("returnView", request.getParameter("returnView"));
		
		return "signup";
	}
	
	@RequestMapping(value="/signup", method = RequestMethod.POST)
    public String createUser(@RequestParam String username, @RequestParam String password, @RequestParam int priviledges, HttpServletRequest request, Model model, HttpSession session, SessionStatus sessionStatus) {
		if(!AuthenticationManager.isUserLoggedIn(session)) {
			return "redirect:/login?form";
		}
		String message = null;
		
		model.asMap().clear();
		
        boolean inCreateMode = (request.getParameter("userId") == null || "".equals(request.getParameter("userId")) && "true".equals(request.getParameter("createMode"))); 
        boolean inEditMode = request.getParameter("userId") != null && "true".equals(request.getParameter("editMode"));
		
        if (inCreateMode) {
        	UserAccount newUser = new UserAccount();
    		newUser.setUsername(username);
    		newUser.setPassword(password);
    		
    		newUser.setPriviledges(String.valueOf(priviledges));
        	// Generate hash
        	String hash = Utilities.toMD5Hash(newUser.getUsername() + newUser.getPassword());
        	System.out.println("Hash is: " + hash);
        	newUser.setHash(hash);
        	
        	System.out.println("New User is: " + newUser);
        	
        	newUser.persist();
        } else if (inEditMode) {
        	Long userId = Long.parseLong(request.getParameter("userId"));
        	UserAccount userAccount = UserAccount.findUserAccount(userId);
        	userAccount.setPassword(password);
    		
        	userAccount.setPriviledges(String.valueOf(priviledges));
        	
        	// regenerate hash
        	String hash = Utilities.toMD5Hash(userAccount.getUsername() + userAccount.getPassword());
        	System.out.println("New hash is: " + hash);
        	userAccount.setHash(hash);
        	
        	System.out.println("Edited User is: " + userAccount);
        	
        	userAccount.merge();
        }
		
		model.addAttribute("message", message);
		
		String returnView = request.getParameter("returnView");
		
        // Return according to the returnView param
        if ("admin".equals(returnView)) {
        	return "redirect:/admin";
        } else if ("login".equals(returnView)) {
        	return "redirect:/login";
        }
		
		return "redirect:/login";
    }

   
    
	@RequestMapping(value="/login", method = RequestMethod.GET)
    public String createForm(Model model) {
        return "login";
    }

	
	private UserAccount checkLogin(String username, String password) {
		try {
			UserAccount user = UserAccount.findUserAccountsByUsernameEqualsAndPasswordEquals(username, password).getSingleResult();
		
			if (user != null) {
				return user;
			} 
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
		return null;
	}
	

	String encodeUrlPathSegment(String pathSegment, HttpServletRequest request) {
        String enc = request.getCharacterEncoding();
        if (enc == null) {
            enc = WebUtils.DEFAULT_CHARACTER_ENCODING;
        }
        try {
            pathSegment = UriUtils.encodePathSegment(pathSegment, enc);
        }
        catch (UnsupportedEncodingException uee) {}
        return pathSegment;
    }
}
