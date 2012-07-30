
package pittheo.projects.template.utils;

import java.awt.Container;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.MediaTracker;
import java.awt.RenderingHints;
import java.awt.Toolkit;
import java.awt.image.BufferedImage;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.List;

import com.sun.image.codec.jpeg.JPEGCodec;
import com.sun.image.codec.jpeg.JPEGEncodeParam;
import com.sun.image.codec.jpeg.JPEGImageEncoder;

public class ThumbnailManager {

	//public static final int MAX_IMG_WIDTH = 300;
	//public static final int MAX_IMG_HEIGHT = 300;

	//public static String SOURCE_FOLDER = "C:\\Users\\PETROS\\Desktop\\IMAGES_SOURCE\\";
	//public static String DESTINATION_FOLDER = "src\\main\\webapp\\images\\thumb\\";
	//public static String DESTINATION_FOLDER = "C:\\Users\\PETROS\\Desktop\\resizing\\";
	//public static String SUFFIX = "_thumb";

	public static String[] filesToResize = { "IMG_2936.JPG", "IMG_3014.JPG", "IMG_3025.JPG", "IMG_3033.JPG", "IMG_3034.JPG", "IMG_3167.JPG", "IMG_3221.JPG", "IMG_3247.JPG", "IMG_3275.JPG"};

	private List<Object> inst = new ArrayList<Object>();
	
	public static void main(String[] args) throws Exception {
		//ThumbnailManager tc = new ThumbnailManager();

		
		//for (String file : filesToResize) {
		//	String sourceImgPath = SOURCE_FOLDER + file;
		//	String targetImgPath = SOURCE_FOLDER + file + "_thumb1.JPG";
		//	System.out.println("\n\n *** Processing image: " + sourceImgPath + " ***");
		//	tc.createThumbnail(sourceImgPath, targetImgPath, MAX_IMG_WIDTH, MAX_IMG_HEIGHT);
		//	System.out.println("Thumbnail Created Successfully");
			
		//	tc.cropImage(targetImgPath);
		//}
		
		//PrettyTime p = new PrettyTime(Locale.UK);
		//System.out.println(p.format(new Date()));
			//prints: �right now�
		ThumbnailManager tm = new ThumbnailManager();
		
		List a = new ArrayList();
		System.out.println(a);
		
		tm.amethod(a);
		System.out.println(a);
		
		a = null;
		System.out.println(a);

		System.out.println("\n\n");
		
		StringBuilder b = new StringBuilder("hello");
		System.out.println(b);
		
		tm.bmethod(b);
		System.out.println(b);
		
		b = null;
		System.out.println(b);

		
		StringBuilder var1 = new StringBuilder("Hello");
		StringBuilder var2 = new StringBuilder("World");
		tm.swapSB(var1, var2);
		System.out.println(var1 + " " + var2 + "\n\n");
		
		String par1 = "Petros";
		String par2 = "Theocharous";
		tm.swapString(par1, par2);
		System.out.println(par1 + " " + par2);
		
	}
	
	public void amethod(List<Object> arg) {
		//arg.add(new Object());
		//System.out.println("inside method: " + arg);
		//arg.clear();
		//System.out.println("inside method2: " + arg);
		//arg = null;
		//System.out.println("inside method3: " + arg);
		
		arg.add(new Object());
		System.out.println("inside method: " + arg);
		
		arg = null;
		//arg.clear();
		//inst.clear();
		//System.out.println("inside method2: " + inst);
		
		//inst = null;
		//System.out.println("inside method3: " + inst);
	}
	
	
	public void bmethod(StringBuilder arg) {
		//arg.add(new Object());
		//System.out.println("inside method: " + arg);
		//arg.clear();
		//System.out.println("inside method2: " + arg);
		//arg = null;
		//System.out.println("inside method3: " + arg);
		
		arg.append(" Petro!");
		arg = new StringBuilder("jjj");
		arg.append(" ssss");
		//arg = new StringBuilder("jjjjjjj");
		System.out.println("inside method B: " + arg);
		//arg = null;
		
		//inst.clear();
		//System.out.println("inside method2: " + inst);
		
		//inst = null;
		//System.out.println("inside method3: " + inst);
	}
	
	
	public void swapSB(StringBuilder arg1, StringBuilder arg2) {
		StringBuilder temp = arg1;
		arg1 = arg2;
		arg2 = temp;
		
		System.out.println("Inside SwapSB: " + arg1 + " " + arg2);
	}
	
	public void swapString(String arg1, String arg2) {
		String temp = arg1;
		arg1 = arg2;
		arg2 = temp;
		
		System.out.println("Inside SwapString: " + arg1 + " " + arg2);
	}
	

	public void createThumbnail(String imgFilePath, String thumbPath,
			int thumbWidth, int thumbHeight) throws Exception {

		Image image = Toolkit.getDefaultToolkit().getImage(imgFilePath);
		
		MediaTracker mediaTracker = new MediaTracker(new Container());
		mediaTracker.addImage(image, 0);
		mediaTracker.waitForID(0);
		
		double thumbRatio = (double) thumbWidth / (double) thumbHeight;
		int imageWidth = image.getWidth(null);
		int imageHeight = image.getHeight(null);
		double imageRatio = (double) imageWidth / (double) imageHeight;
		if (thumbRatio < imageRatio) {
			thumbHeight = (int) (thumbWidth / imageRatio);
		} else {
			thumbWidth = (int) (thumbHeight * imageRatio);
		}
		BufferedImage thumbImage = new BufferedImage(thumbWidth, thumbHeight,
				BufferedImage.TYPE_INT_RGB);
		
		Graphics2D graphics2D = thumbImage.createGraphics();
		graphics2D.setRenderingHint(RenderingHints.KEY_INTERPOLATION,
				RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		graphics2D.drawImage(image, 0, 0, thumbWidth, thumbHeight, null);
		BufferedOutputStream out = new BufferedOutputStream(
				new FileOutputStream(thumbPath));
		JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(out);
		JPEGEncodeParam param = encoder.getDefaultJPEGEncodeParam(thumbImage);
		int quality = 100;
		param.setQuality((float) quality / 100.0f, false);
		encoder.setJPEGEncodeParam(param);
		encoder.encode(thumbImage);
		out.close();
		
	}
	
	public void cropImage(String imgFilePath) throws Exception {
		// Crop the image
		Image image = Toolkit.getDefaultToolkit().getImage(imgFilePath);
		MediaTracker mediaTracker = new MediaTracker(new Container());
		mediaTracker.addImage(image, 0);
		mediaTracker.waitForID(0);
		
		image = CropImage.crop(image);
		
		mediaTracker = new MediaTracker(new Container());
		mediaTracker.addImage(image, 0);
		mediaTracker.waitForID(0);
		
		int width = image.getWidth(null);
		int height = image.getHeight(null);
		
		BufferedImage croppedImage = new BufferedImage(width, height,
				BufferedImage.TYPE_INT_RGB);
		
		Graphics2D graphics2D = croppedImage.createGraphics();
		graphics2D.setRenderingHint(RenderingHints.KEY_INTERPOLATION,
				RenderingHints.VALUE_INTERPOLATION_BILINEAR);
		graphics2D.drawImage(image, 0, 0, image.getWidth(null), image.getHeight(null), null);
		
		BufferedOutputStream out = new BufferedOutputStream(
				new FileOutputStream(imgFilePath));
		JPEGImageEncoder encoder = JPEGCodec.createJPEGEncoder(out);
		JPEGEncodeParam param = encoder.getDefaultJPEGEncodeParam(croppedImage);
		int quality = 100;
		param.setQuality((float) quality / 100.0f, false);
		encoder.setJPEGEncodeParam(param);
		encoder.encode(croppedImage);
		out.close();
	}
}
