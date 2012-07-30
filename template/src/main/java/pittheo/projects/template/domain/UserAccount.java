package pittheo.projects.template.domain;

import org.springframework.roo.addon.entity.RooEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@RooJavaBean
@RooToString
@RooEntity(finders = { "findUserAccountsByUsernameLike", "findUserAccountsByUsernameEqualsAndPasswordEquals" })
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
}
