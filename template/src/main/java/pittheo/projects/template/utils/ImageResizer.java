package pittheo.projects.template.utils;

import java.awt.AlphaComposite;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.GraphicsConfiguration;
import java.awt.GraphicsDevice;
import java.awt.GraphicsEnvironment;
import java.awt.HeadlessException;
import java.awt.Image;
import java.awt.RenderingHints;
import java.awt.Transparency;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;
import java.awt.image.PixelGrabber;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.swing.ImageIcon;
 
public class ImageResizer {
 
	private static final int MAX_IMG_WIDTH = 200;
	private static final int MAX_IMG_HEIGHT = 200;
	
	public static String SOURCE_FOLDER = "C:\\Users\\PETROS\\DESKTOP Nov 2010\\Fotos\\End of Summer 2010\\";
	public static String DESTINATION_FOLDER = "C:\\Users\\PETROS\\Desktop\\resizing\\";
	public static String SUFFIX = "_RESIZED";
 
	private static String[] filesToResize = {"IMG_3349.JPG", "IMG_3354.JPG", "IMG_3351.JPG", "IMG_3347.JPG"};
	
	
	public static void main(String [] args){
 
	try {
		for (String filename : filesToResize) {
			String[] extensionSplitParts = filename.split("\\.");
			if (extensionSplitParts != null & extensionSplitParts.length > 1) {
				String extension = extensionSplitParts[extensionSplitParts.length-1];
				String restOfFilename = extensionSplitParts[extensionSplitParts.length-2];
				
				BufferedImage originalImage = ImageIO.read(new File(SOURCE_FOLDER + filename));
				int type = originalImage.getType() == 0? BufferedImage.TYPE_INT_ARGB : originalImage.getType();
		 
				BufferedImage resizeImageJpg = resizeImage(originalImage, type);
				String destinationFilePath = DESTINATION_FOLDER + restOfFilename + SUFFIX + "." + extension;
				
				ImageIO.write(resizeImageJpg, "jpg", new File(destinationFilePath));
				System.out.println("Written new JPG to file: " + destinationFilePath);
			} else {
				System.out.println("File " + filename + " has no extension!");
			}
			 			
		}
 
		//BufferedImage resizeImagePng = resizeImage(originalImage, type);
		//ImageIO.write(resizeImagePng, "png", new File("c:\\image\\mkyong_png.jpg")); 
 
		//BufferedImage resizeImageHintJpg = resizeImageWithHint(originalImage, type);
		//ImageIO.write(resizeImageHintJpg, "jpg", new File("c:\\image\\mkyong_hint_jpg.jpg")); 
 
		//BufferedImage resizeImageHintPng = resizeImageWithHint(originalImage, type);
		//ImageIO.write(resizeImageHintPng, "png", new File("c:\\image\\mkyong_hint_png.jpg")); 
 
	}catch(IOException e){
		System.out.println(e.getMessage());
	}
 
    }
 
    private static BufferedImage resizeImage(BufferedImage originalImage, int type) {
    	double scale = determineImageScale(originalImage.getWidth(), originalImage.getHeight(), MAX_IMG_WIDTH, MAX_IMG_HEIGHT);
    	System.out.println("Scale is: " + scale);
    	int newWidth = (int) (originalImage.getWidth() * scale);
    	int newHeight = (int) (originalImage.getHeight() * scale);
    	System.out.println("New dimensions: " + newWidth + " x " + newHeight);
	    //BufferedImage resizedImage = new BufferedImage(newWidth, 
	    //		newHeight, type);
	    
	    
	    Image scaledImage = originalImage.getScaledInstance(MAX_IMG_WIDTH, -1, 
	    		Image.SCALE_FAST);
	    BufferedImage finalBufferedImage = toBufferedImage(scaledImage);
	    //resizedImage.getScaledInstance(MAX_IMG_WIDTH, -1, Image.SCALE_FAST);
	    //Graphics2D g = resizedImage.createGraphics();
	    //g.drawImage(originalImage, 0, 0, MAX_IMG_WIDTH, MAX_IMG_HEIGHT, null);
	    //g.dispose();
	 
		return finalBufferedImage;
    }
    
    private static double determineImageScale(int sourceWidth, int sourceHeight, int targetWidth, int targetHeight) {

    	double scalex = (double) targetWidth / sourceWidth;
    	double scaley = (double) targetHeight / sourceHeight;
    	return Math.min(scalex, scaley);
    }
 
    private static BufferedImage resizeImageWithHint(BufferedImage originalImage, int type){
		BufferedImage resizedImage = new BufferedImage(MAX_IMG_WIDTH, MAX_IMG_HEIGHT, type);
		Graphics2D g = resizedImage.createGraphics();
		g.drawImage(originalImage, 0, 0, MAX_IMG_WIDTH, MAX_IMG_HEIGHT, null);
		g.dispose();	
		g.setComposite(AlphaComposite.Src);
	 
		g.setRenderingHint(RenderingHints.KEY_INTERPOLATION,
		RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		g.setRenderingHint(RenderingHints.KEY_RENDERING,
		RenderingHints.VALUE_RENDER_QUALITY);
		g.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
		RenderingHints.VALUE_ANTIALIAS_ON);
	 
		return resizedImage;
    }	
    
    
 // This method returns a buffered image with the contents of an image
    public static BufferedImage toBufferedImage(Image image) {
        if (image instanceof BufferedImage) {
            return (BufferedImage)image;
        }

        // This code ensures that all the pixels in the image are loaded
        image = new ImageIcon(image).getImage();

        // Determine if the image has transparent pixels; for this method's
        // implementation, see Determining If an Image Has Transparent Pixels
        boolean hasAlpha = hasAlpha(image);

        // Create a buffered image with a format that's compatible with the screen
        BufferedImage bimage = null;
        GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
        try {
            // Determine the type of transparency of the new buffered image
            int transparency = Transparency.OPAQUE;
            if (hasAlpha) {
                transparency = Transparency.BITMASK;
            }

            // Create the buffered image
            GraphicsDevice gs = ge.getDefaultScreenDevice();
            GraphicsConfiguration gc = gs.getDefaultConfiguration();
            bimage = gc.createCompatibleImage(
                image.getWidth(null), image.getHeight(null), transparency);
        } catch (HeadlessException e) {
            // The system does not have a screen
        }

        if (bimage == null) {
            // Create a buffered image using the default color model
            int type = BufferedImage.TYPE_INT_RGB;
            if (hasAlpha) {
                type = BufferedImage.TYPE_INT_ARGB;
            }
            bimage = new BufferedImage(image.getWidth(null), image.getHeight(null), type);
        }

        // Copy image to buffered image
        Graphics g = bimage.createGraphics();

        // Paint the image onto the buffered image
        g.drawImage(image, 0, 0, null);
        g.dispose();

        return bimage;
    }
    
 // This method returns true if the specified image has transparent pixels
    public static boolean hasAlpha(Image image) {
        // If buffered image, the color model is readily available
        if (image instanceof BufferedImage) {
            BufferedImage bimage = (BufferedImage)image;
            return bimage.getColorModel().hasAlpha();
        }

        // Use a pixel grabber to retrieve the image's color model;
        // grabbing a single pixel is usually sufficient
         PixelGrabber pg = new PixelGrabber(image, 0, 0, 1, 1, false);
        try {
            pg.grabPixels();
        } catch (InterruptedException e) {
        }

        // Get the image's color model
        ColorModel cm = pg.getColorModel();
        return cm.hasAlpha();
    }
    
    
}