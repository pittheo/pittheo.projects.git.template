package pittheo.projects.template.domain;

import org.springframework.roo.addon.entity.RooEntity;
import org.springframework.roo.addon.javabean.RooJavaBean;
import org.springframework.roo.addon.tostring.RooToString;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@RooJavaBean
@RooToString
@RooEntity
public class UserProfile {

    @NotNull
    @Size(min = 2)
    private String firstName;

    @Size(min = 2)
    private String surname;

    private String locationName;

    private Float coordX;

    private Float coordY;

    private String website;

    @NotNull
    private String thumbnailPath;
}
