package pittheo.projects.template.domain;

import org.springframework.roo.addon.entity.RooEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import pittheo.projects.template.domain.UserProfile;
import javax.persistence.ManyToOne;
import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import org.springframework.format.annotation.DateTimeFormat;

@RooJavaBean
@RooToString
@RooEntity(finders = { "findUserAccountsByUsernameLike", "findUserAccountsByUsernameEqualsAndPasswordEquals", "findUserAccountsByEmailEquals", "findUserAccountsByVerifiedNot", "findUserAccountsByUsernameEquals" })
public class UserAccount {

    @NotNull
    @Size(min = 2)
    private String username;

    @NotNull
    @Size(min = 2)
    private String password;

    @NotNull
    @Size(min = 2)
    private String hash;

    @NotNull
    private String priviledges;

    @ManyToOne
    private UserProfile profile;

    @NotNull
    @Size(min = 2)
    private String email;

    private transient String emailRetype;

    private Boolean verified;

    private Boolean fromRegistration;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @DateTimeFormat(style = "M-")
    private Date verifiedAt;
}
