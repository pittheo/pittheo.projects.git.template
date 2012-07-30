package pittheo.projects.template.web;

import java.io.UnsupportedEncodingException;
import java.util.Collection;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import org.joda.time.format.DateTimeFormat;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.roo.addon.web.mvc.controller.RooWebScaffold;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.util.UriUtils;
import org.springframework.web.util.WebUtils;
import pittheo.projects.template.domain.UserAccount;
import pittheo.projects.template.domain.UserProfile;

@RooWebScaffold(path = "useraccounts", formBackingObject = UserAccount.class)
@RequestMapping("/useraccounts")
@Controller
public class UserAccountController {

	@RequestMapping(method = RequestMethod.POST)
    public String create(@Valid UserAccount userAccount, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            uiModel.addAttribute("userAccount", userAccount);
            return "useraccounts/create";
        }
        uiModel.asMap().clear();
        userAccount.persist();
        return "redirect:/useraccounts/" + encodeUrlPathSegment(userAccount.getId().toString(), httpServletRequest);
    }

	@RequestMapping(params = "form", method = RequestMethod.GET)
    public String createForm(Model uiModel) {
        uiModel.addAttribute("userAccount", new UserAccount());
        return "useraccounts/create";
    }

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public String show(@PathVariable("id") Long id, Model uiModel) {
        uiModel.addAttribute("user", UserAccount.findUserAccount(id));
        uiModel.addAttribute("itemId", id);
        return "userprofiles/show";
    }

	@RequestMapping(method = RequestMethod.GET)
    public String list(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        if (page != null || size != null) {
            int sizeNo = size == null ? 10 : size.intValue();
            uiModel.addAttribute("useraccounts", UserAccount.findUserAccountEntries(page == null ? 0 : (page.intValue() - 1) * sizeNo, sizeNo));
            float nrOfPages = (float) UserAccount.countUserAccounts() / sizeNo;
            uiModel.addAttribute("maxPages", (int) ((nrOfPages > (int) nrOfPages || nrOfPages == 0.0) ? nrOfPages + 1 : nrOfPages));
        } else {
            uiModel.addAttribute("useraccounts", UserAccount.findAllUserAccounts());
        }
        return "useraccounts/list";
    }

	@RequestMapping(method = RequestMethod.PUT)
    public String update(@Valid UserAccount userAccount, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            uiModel.addAttribute("userAccount", userAccount);
            return "useraccounts/update";
        }
        uiModel.asMap().clear();
        userAccount.merge();
        return "redirect:/useraccounts/" + encodeUrlPathSegment(userAccount.getId().toString(), httpServletRequest);
    }

	@RequestMapping(value = "/{id}", params = "form", method = RequestMethod.GET)
    public String updateForm(@PathVariable("id") Long id, Model uiModel) {
        uiModel.addAttribute("userAccount", UserAccount.findUserAccount(id));
        return "useraccounts/update";
    }

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public String delete(@PathVariable("id") Long id, @RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        UserAccount.findUserAccount(id).remove();
        uiModel.asMap().clear();
        uiModel.addAttribute("page", (page == null) ? "1" : page.toString());
        uiModel.addAttribute("size", (size == null) ? "10" : size.toString());
        return "redirect:/useraccounts";
    }

	@ModelAttribute("useraccounts")
    public Collection<UserAccount> populateUserAccounts() {
        return UserAccount.findAllUserAccounts();
    }

	String encodeUrlPathSegment(String pathSegment, HttpServletRequest httpServletRequest) {
        String enc = httpServletRequest.getCharacterEncoding();
        if (enc == null) {
            enc = WebUtils.DEFAULT_CHARACTER_ENCODING;
        }
        try {
            pathSegment = UriUtils.encodePathSegment(pathSegment, enc);
        }
        catch (UnsupportedEncodingException uee) {}
        return pathSegment;
    }

	@RequestMapping(params = { "find=ByUsernameEqualsAndPasswordEquals", "form" }, method = RequestMethod.GET)
    public String findUserAccountsByUsernameEqualsAndPasswordEqualsForm(Model uiModel) {
        return "useraccounts/findUserAccountsByUsernameEqualsAndPasswordEquals";
    }

	@RequestMapping(params = "find=ByUsernameEqualsAndPasswordEquals", method = RequestMethod.GET)
    public String findUserAccountsByUsernameEqualsAndPasswordEquals(@RequestParam("username") String username, @RequestParam("password") String password, Model uiModel) {
        uiModel.addAttribute("useraccounts", UserAccount.findUserAccountsByUsernameEqualsAndPasswordEquals(username, password).getResultList());
        return "useraccounts/list";
    }

	@RequestMapping(params = { "find=ByUsernameLike", "form" }, method = RequestMethod.GET)
    public String findUserAccountsByUsernameLikeForm(Model uiModel) {
        return "useraccounts/findUserAccountsByUsernameLike";
    }

	@RequestMapping(params = "find=ByUsernameLike", method = RequestMethod.GET)
    public String findUserAccountsByUsernameLike(@RequestParam("username") String username, Model uiModel) {
        uiModel.addAttribute("useraccounts", UserAccount.findUserAccountsByUsernameLike(username).getResultList());
        return "useraccounts/list";
    }

	@ModelAttribute("userprofiles")
    public Collection<UserProfile> populateUserProfiles() {
        return UserProfile.findAllUserProfiles();
    }

	void addDateTimeFormatPatterns(Model uiModel) {
        uiModel.addAttribute("userAccount_createdat_date_format", DateTimeFormat.patternForStyle("M-", LocaleContextHolder.getLocale()));
        uiModel.addAttribute("userAccount_verifiedat_date_format", DateTimeFormat.patternForStyle("M-", LocaleContextHolder.getLocale()));
    }

	@RequestMapping(params = { "find=ByEmailEquals", "form" }, method = RequestMethod.GET)
    public String findUserAccountsByEmailEqualsForm(Model uiModel) {
        return "useraccounts/findUserAccountsByEmailEquals";
    }

	@RequestMapping(params = "find=ByEmailEquals", method = RequestMethod.GET)
    public String findUserAccountsByEmailEquals(@RequestParam("email") String email, Model uiModel) {
        uiModel.addAttribute("useraccounts", UserAccount.findUserAccountsByEmailEquals(email).getResultList());
        return "useraccounts/list";
    }

	@RequestMapping(params = { "find=ByUsernameEquals", "form" }, method = RequestMethod.GET)
    public String findUserAccountsByUsernameEqualsForm(Model uiModel) {
        return "useraccounts/findUserAccountsByUsernameEquals";
    }

	@RequestMapping(params = "find=ByUsernameEquals", method = RequestMethod.GET)
    public String findUserAccountsByUsernameEquals(@RequestParam("username") String username, Model uiModel) {
        uiModel.addAttribute("useraccounts", UserAccount.findUserAccountsByUsernameEquals(username).getResultList());
        return "useraccounts/list";
    }

	@RequestMapping(params = { "find=ByVerifiedNot", "form" }, method = RequestMethod.GET)
    public String findUserAccountsByVerifiedNotForm(Model uiModel) {
        return "useraccounts/findUserAccountsByVerifiedNot";
    }

	@RequestMapping(params = "find=ByVerifiedNot", method = RequestMethod.GET)
    public String findUserAccountsByVerifiedNot(@RequestParam(value = "verified", required = false) Boolean verified, Model uiModel) {
        uiModel.addAttribute("useraccounts", UserAccount.findUserAccountsByVerifiedNot(verified == null ? new Boolean(false) : verified).getResultList());
        return "useraccounts/list";
    }
}
