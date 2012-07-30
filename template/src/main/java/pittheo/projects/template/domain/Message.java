package pittheo.projects.template.domain;

import org.springframework.roo.addon.entity.RooEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.tostring.RooToString;
import pittheo.projects.template.domain.MessageType;
import javax.validation.constraints.NotNull;
import javax.persistence.Enumerated;
import pittheo.projects.template.domain.UserAccount;
import javax.persistence.ManyToOne;
import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.format.annotation.DateTimeFormat;

@RooJavaBean
@RooToString
@RooEntity(finders = { "findMessagesByType", "findMessagesBySpam", "findMessagesBySender", "findMessagesByFolderEquals" })
public class Message {

    @NotNull
    @Enumerated
    private MessageType type;

    @NotNull
    @ManyToOne
    private UserAccount sender;

    @NotNull
    @ManyToOne
    private UserAccount receiver;

    private Boolean isRead;

    private String subject;

    private String content;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date sentAt;

    private Boolean flagged;

    private Boolean spam;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date lastViewed;

    private String folder;
}
