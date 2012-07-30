package pittheo.projects.template.web;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import pittheo.projects.template.utils.ThumbnailManager;
import pittheo.projects.template.utils.Utilities;

public class UploadHelper {

	@Autowired
	private ThumbnailManager tbManager;
	
	private String destinationFolder;
	
	private String themesImageUriPrefix;
	
	private String usersImageUriPrefix;
	
	private String thumbnailSuffix;
	
	private int maxImageWidth;
	private int maxImageHeight;
	
	Logger logger = Logger.getLogger(UploadHelper.class);
	
	
    public String uploadImage(HttpServletRequest request, HttpServletResponse response) {
    	PrintWriter writer = null;
        InputStream is = null;
        FileOutputStream fos = null;
        
		String path = "";

        try {
            writer = response.getWriter();
        } catch (IOException ex) {
        	logger.error("OctetStreamReader.class.getName() has thrown an exception: " + ex.getMessage());
        }

        try {
        	is = request.getInputStream();
        	String filename = request.getParameter("qqfile");
        	
        	logger.debug("Filename is: " + filename);
        	String originalImagePath = destinationFolder + filename;
        	String thumbnailImagePath = destinationFolder + filename + "_thumb.JPG";
        	logger.debug("Path is: " + originalImagePath);
        	
        	fos = new FileOutputStream(new File(originalImagePath));
        	byte[] buffer = new byte[4096];
        	int bytesRead;
        	while ((bytesRead = is.read(buffer)) != -1) {
        	  fos.write(buffer, 0, bytesRead);
        	}
        	
        	if (Utilities.isAcceptedImageFile(originalImagePath)) {
        		System.out.println("It is an accepted image file!");
        		int maxThumbWidth = maxImageWidth;
        		int maxThumbHeight = maxImageHeight;
        		
        		// The request parameter overwrite the default dimension values
        		String maxWidthString = request.getParameter("maxWidth");
        		String maxHeightString = request.getParameter("maxHeight");
        		
        		if (maxWidthString != null && !"".equals(maxWidthString)) {
        			maxThumbWidth = Integer.parseInt(maxWidthString); 
        		}
        		
        		if (maxHeightString != null && !"".equals(maxHeightString)) {
        			maxThumbHeight = Integer.parseInt(maxHeightString); 
        		}
        		
        		logger.debug("Max Width = " + maxThumbWidth);
        		logger.debug("Max Height = " + maxThumbHeight);
        		
        		logger.info("Saving " + filename + " to path: " + thumbnailImagePath);
        		
        		try {
        			tbManager.createThumbnail(originalImagePath, thumbnailImagePath, maxThumbWidth, maxThumbHeight);
        			logger.debug("Created thumbnail image and overwritten the original.");
        			
        			tbManager.cropImage(thumbnailImagePath);
        			logger.debug("Thumbnail cropped.");
        			
        			Long id = Long.parseLong(request.getParameter("id"));
            		//Stelexos stelexos = Stelexos.findStelexos(id);
            		//stelexos.setThumbnailPath(usersImageUriPrefix + filename + thumbnailSuffix + ".JPG");
            		//stelexos.merge();

        			//path = stelexos.getThumbnailPath();
                	logger.debug("Now pictureURI for theme is: " + path);
        		} catch(Exception e) {
        			logger.error("Could not create thumbnail. We continue normally, using only the original image.", e);
        		}
        	}
        	
        	//System.out.println("Deleting original image");
        	//Utilities.deleteFile(originalImagePath);
        	
        	response.setStatus(response.SC_OK);
            writer.print("{success: true}");
        } catch (FileNotFoundException ex) {
            response.setStatus(response.SC_INTERNAL_SERVER_ERROR);
            writer.print("{success: false}");
            logger.error("OctetStreamReader.class.getName() has thrown an exception: " + ex.getMessage());
        } catch (IOException ex) {
            response.setStatus(response.SC_INTERNAL_SERVER_ERROR);
            writer.print("{success: false}");
            logger.error("OctetStreamReader.class.getName() has thrown an exception: " + ex.getMessage());
        } finally {
            try {
                fos.close();
                is.close();
            } catch (IOException ignored) {
            }
        }
        logger.warn("Writer error is: " + writer.checkError());
        writer.flush();
        writer.close();
        
        return path;
    }

    
	public ThumbnailManager getTbManager() {
		return tbManager;
	}

	public void setTbManager(ThumbnailManager tbManager) {
		this.tbManager = tbManager;
	}

	public String getDestinationFolder() {
		return destinationFolder;
	}


	public void setDestinationFolder(String destinationFolder) {
		this.destinationFolder = destinationFolder;
	}


	public String getThumbnailSuffix() {
		return thumbnailSuffix;
	}


	public void setThumbnailSuffix(String thumbnailSuffix) {
		this.thumbnailSuffix = thumbnailSuffix;
		System.out.println(this.thumbnailSuffix);
	}


	public int getMaxImageWidth() {
		return maxImageWidth;
	}


	public void setMaxImageWidth(int maxImageWidth) {
		this.maxImageWidth = maxImageWidth;
	}


	public int getMaxImageHeight() {
		return maxImageHeight;
	}


	public void setMaxImageHeight(int maxImageHeight) {
		this.maxImageHeight = maxImageHeight;
	}


	public String getThemesImageUriPrefix() {
		return themesImageUriPrefix;
	}


	public void setThemesImageUriPrefix(String themesImageUriPrefix) {
		this.themesImageUriPrefix = themesImageUriPrefix;
		System.out.println(this.themesImageUriPrefix);
	}


	public String getUsersImageUriPrefix() {
		return usersImageUriPrefix;
	}


	public void setUsersImageUriPrefix(String usersImageUriPrefix) {
		this.usersImageUriPrefix = usersImageUriPrefix;
		System.out.println(this.usersImageUriPrefix);
	}

}
