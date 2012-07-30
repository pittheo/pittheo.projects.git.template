package pittheo.projects.template.web;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;
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

import pittheo.projects.template.domain.Message;
import pittheo.projects.template.domain.MessageType;
import pittheo.projects.template.domain.UserAccount;

@RooWebScaffold(path = "messages", formBackingObject = Message.class)
@RequestMapping("/messages")
@Controller
public class MessageController {

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
	
	@RequestMapping(method = RequestMethod.GET)
    public String list(@RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        if (page != null || size != null) {
            int sizeNo = size == null ? 10 : size.intValue();
            uiModel.addAttribute("messages", Message.findMessageEntries(page == null ? 0 : (page.intValue() - 1) * sizeNo, sizeNo));
            float nrOfPages = (float) Message.countMessages() / sizeNo;
            uiModel.addAttribute("maxPages", (int) ((nrOfPages > (int) nrOfPages || nrOfPages == 0.0) ? nrOfPages + 1 : nrOfPages));
        } else {
            uiModel.addAttribute("messages", Message.findAllMessages());
        }
        return "messages/list";
    }
	
	@RequestMapping(params = "form", method = RequestMethod.GET)
    public String createForm(Model uiModel) {
        uiModel.addAttribute("message", new Message());
        return "messages/create";
    }
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public String delete(@PathVariable("id") Long id, @RequestParam(value = "page", required = false) Integer page, @RequestParam(value = "size", required = false) Integer size, Model uiModel) {
        Message.findMessage(id).remove();
        uiModel.asMap().clear();
        uiModel.addAttribute("page", (page == null) ? "1" : page.toString());
        uiModel.addAttribute("size", (size == null) ? "10" : size.toString());
        return "redirect:/messages";
    }


	@RequestMapping(params = { "find=ByFolderEquals", "form" }, method = RequestMethod.GET)
    public String findMessagesByFolderEqualsForm(Model uiModel) {
        return "messages/findMessagesByFolderEquals";
    }

	@RequestMapping(params = "find=ByFolderEquals", method = RequestMethod.GET)
    public String findMessagesByFolderEquals(@RequestParam("folder") String folder, Model uiModel) {
        uiModel.addAttribute("messages", Message.findMessagesByFolderEquals(folder).getResultList());
        return "messages/list";
    }

	@RequestMapping(params = { "find=BySender", "form" }, method = RequestMethod.GET)
    public String findMessagesBySenderForm(Model uiModel) {
        uiModel.addAttribute("useraccounts", UserAccount.findAllUserAccounts());
        return "messages/findMessagesBySender";
    }

	@RequestMapping(params = "find=BySender", method = RequestMethod.GET)
    public String findMessagesBySender(@RequestParam("sender") UserAccount sender, Model uiModel) {
        uiModel.addAttribute("messages", Message.findMessagesBySender(sender).getResultList());
        return "messages/list";
    }

	@RequestMapping(params = { "find=BySpam", "form" }, method = RequestMethod.GET)
    public String findMessagesBySpamForm(Model uiModel) {
        return "messages/findMessagesBySpam";
    }

	@RequestMapping(params = "find=BySpam", method = RequestMethod.GET)
    public String findMessagesBySpam(@RequestParam(value = "spam", required = false) Boolean spam, Model uiModel) {
        uiModel.addAttribute("messages", Message.findMessagesBySpam(spam == null ? new Boolean(false) : spam).getResultList());
        return "messages/list";
    }

	@RequestMapping(params = { "find=ByType", "form" }, method = RequestMethod.GET)
    public String findMessagesByTypeForm(Model uiModel) {
        uiModel.addAttribute("messagetypes", java.util.Arrays.asList(MessageType.class.getEnumConstants()));
        return "messages/findMessagesByType";
    }

	@RequestMapping(params = "find=ByType", method = RequestMethod.GET)
    public String findMessagesByType(@RequestParam("type") MessageType type, Model uiModel) {
        uiModel.addAttribute("messages", Message.findMessagesByType(type).getResultList());
        return "messages/list";
    }

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public String show(@PathVariable("id") Long id, Model uiModel) {
        addDateTimeFormatPatterns(uiModel);
        uiModel.addAttribute("message", Message.findMessage(id));
        uiModel.addAttribute("itemId", id);
        return "messages/show";
    }

	@RequestMapping(method = RequestMethod.PUT)
    public String update(@Valid Message message, BindingResult bindingResult, Model uiModel, HttpServletRequest httpServletRequest) {
        if (bindingResult.hasErrors()) {
            uiModel.addAttribute("message", message);
            addDateTimeFormatPatterns(uiModel);
            return "messages/update";
        }
        uiModel.asMap().clear();
        message.merge();
        return "redirect:/messages/" + encodeUrlPathSegment(message.getId().toString(), httpServletRequest);
    }

	@RequestMapping(value = "/{id}", params = "form", method = RequestMethod.GET)
    public String updateForm(@PathVariable("id") Long id, Model uiModel) {
        uiModel.addAttribute("message", Message.findMessage(id));
        addDateTimeFormatPatterns(uiModel);
        return "messages/update";
    }

	@ModelAttribute("messages")
    public Collection<Message> populateMessages() {
        return Message.findAllMessages();
    }

	@ModelAttribute("messagetypes")
    public Collection<MessageType> populateMessageTypes() {
        return Arrays.asList(MessageType.class.getEnumConstants());
    }

	@ModelAttribute("useraccounts")
    public Collection<UserAccount> populateUserAccounts() {
        return UserAccount.findAllUserAccounts();
    }

	void addDateTimeFormatPatterns(Model uiModel) {
        uiModel.addAttribute("message_sentat_date_format", DateTimeFormat.patternForStyle("M-", LocaleContextHolder.getLocale()));
        uiModel.addAttribute("message_lastviewed_date_format", DateTimeFormat.patternForStyle("M-", LocaleContextHolder.getLocale()));
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
}
