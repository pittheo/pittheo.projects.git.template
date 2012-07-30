package pittheo.projects.template.utils;

import java.io.File;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.servlet.http.Cookie;

public class Utilities {

	public static final int MAX_IMG_WIDTH = 700;
	public static final int MAX_IMG_HEIGHT = 701;

	public static String SOURCE_FOLDER = "C:\\Profiles\\All Users\\Documents\\My Pictures\\Sample Pictures\\";
	public static String USER_PROFILE_DESTINATION_FOLDER = "src\\main\\webapp\\images\\users\\thumb\\";
	public static String BET_DESTINATION_FOLDER = "src\\main\\webapp\\images\\bets\\thumb\\";
	// public static String DESTINATION_FOLDER =
	// "C:\\Users\\PETROS\\Desktop\\resizing\\";
	public static String SUFFIX = "_thumb";

	public static String[] acceptedImageExtensions = { "jpg", "jpeg", "gif" };

	public static String toMD5Hash(String source) {
		try {
			MessageDigest algorithm = MessageDigest.getInstance("MD5");
			algorithm.reset();
			algorithm.update(source.getBytes());
			byte messageDigest[] = algorithm.digest();

			StringBuffer hexString = new StringBuffer();
			for (int i = 0; i < messageDigest.length; i++) {
				hexString.append(Integer.toHexString(0xFF & messageDigest[i]));
			}
			String hash = hexString.toString();
			return hash;
		} catch (NoSuchAlgorithmException nsae) {
			nsae.printStackTrace();
		}
		return null;
	}

	public static boolean deleteFile(String filePath)
			throws IllegalAccessException {
		// A File object to represent the filename
		File f = new File(filePath);

		// Make sure the file or directory exists and isn't write protected
		if (!f.exists()) {
			throw new IllegalArgumentException(
					"Delete: no such file or directory: " + filePath);
		}
		if (!f.canWrite()) {
			throw new IllegalArgumentException("Delete: write protected: "
					+ filePath);
		}
		// If it is a directory, make sure it is empty
		if (f.isDirectory()) {
			String[] files = f.list();
			if (files.length > 0) {
				throw new IllegalArgumentException(
						"Delete: directory not empty: " + filePath);
			}
		}

		// Attempt to delete it
		boolean success = f.delete();

		return success;
	}

	public static boolean isAcceptedImageFile(String filename) {
		String lowerCaseFilename = filename.toLowerCase();

		for (String extension : acceptedImageExtensions) {
			if (lowerCaseFilename.endsWith("." + extension)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Retrieves the value of the cookie with the corresponding name.
	 */
	public static String getCookieValueWithName(Cookie[] cookies, String name) {
		if (cookies != null) {
			for (int cookie_i = 0; cookie_i < cookies.length; cookie_i++) {
				if (cookies[cookie_i].getName().equals(name)) {
					return cookies[cookie_i].getValue();
				}
			}
		}
		return null;
	}

	
}
