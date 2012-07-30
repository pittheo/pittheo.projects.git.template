package pittheo.projects.template.web;

import pittheo.projects.template.domain.UserAccount;
import pittheo.projects.template.utils.Utilities;


public class Initiator {
	
	private String imgPrefixPath;

	
	public Initiator(String imgPrefixPath) {
		super();
		this.imgPrefixPath = imgPrefixPath;
		init();
	}

	private void init() {
		// INITIALIZE THE SYSTEM DATA
		System.out.println("**************** INITIALIZING SYSTEM DATA *****************");
		// Create admin user
		//createAdminUser();
		
		// Call other data initialization methods
		
		// Fix the images path
		fixImagesPath();
	}
	
	private void fixImagesPath() {
/*		List<UserAccount> all = Stelexos.findAllStelexoses();
		
		System.out.println(imgPrefixPath);
		
		for (Stelexos st : all) {
			String imgPath = st.getThumbnailPath();
			
			if (!imgPath.endsWith("unknown-person.jpg")) {
				String[] split1 = imgPath.split("/");
				String filename = split1[split1.length-1];
				imgPath = imgPrefixPath + "/" + filename;
				System.out.println("New Img Path is: " + imgPath);
				st.setThumbnailPath(imgPath);
				
				st.merge();
			}
		}*/
	}

	
	private void createAdminUser() {
/*		System.out.println("**************** CREATING THE ADMIN USER... *****************");
		UserAccount adminAcct = null;
		try {
			adminAcct = UserAccount.findUserAccountsByUsernameEquals("admin").getSingleResult();
			if (adminAcct == null || !"admin".equals(adminAcct.getPassword())) {
				adminAcct = new UserAccount();
				adminAcct.setUsername("admin");
				adminAcct.setPassword("admin");
				adminAcct.setHash(Utilities.toMD5Hash("admin"));
				adminAcct.setPriviledges("1");
				
				adminAcct.persist();
			}
		} catch(Exception e) {
			adminAcct = new UserAccount();
			adminAcct.setUsername("admin");
			adminAcct.setPassword("admin");
			adminAcct.setHash(Utilities.toMD5Hash("admin"));
			adminAcct.setPriviledges("1");
			
			adminAcct.persist();
		}
		System.out.println("**************** DONE! *****************");*/
	}

	public String getImgPrefixPath() {
		return imgPrefixPath;
	}

	public void setImgPrefixPath(String imgPrefixPath) {
		this.imgPrefixPath = imgPrefixPath;
	}

}
