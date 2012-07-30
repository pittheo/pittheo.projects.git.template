package pittheo.projects.template.utils;

import java.awt.*;
import javax.swing.*;
import java.awt.image.CropImageFilter;
import java.awt.image.FilteredImageSource;

public class CropImage extends JFrame {
  Image image;
  Insets insets;
  
  public static String[] filesToResize = { "IMG_2889.JPG", "IMG_2936.JPG" };

  public CropImage() {
    super("Crop Image");
    String path = "C:\\Users\\PETROS\\Desktop\\resizing\\" + filesToResize[0];
    ImageIcon icon = new ImageIcon(path);
    image = icon.getImage();
    
    // Calculate the final dimensions.
    // Choose the smallest between height and width and crop the other dimension.
    System.out.println("Original width: " + image.getWidth(null));
    System.out.println("Original height: " + image.getHeight(null));
    int differenceForSide = 0;
    int finalWidth = 0;
    int size = image.getWidth(null);
    if (image.getHeight(null) < size) {
    	size = image.getHeight(null);
    	differenceForSide =  (image.getWidth(null) - image.getHeight(null)) / 2;
    	 
    }
    System.out.println("Final dimensions will be: " + size + " x " + size);
    System.out.println("1: " + differenceForSide);
    System.out.println("2: " + 0);
    System.out.println("3: " + size);
    System.out.println("4: " + size);
    
    image = createImage(new FilteredImageSource(image.getSource(), 
    		new CropImageFilter(differenceForSide, 
    							0, 
    							size, 
    							size)));
  }
  
  
  
  public static Image crop (Image image) {
	    // Calculate the final dimensions.
	    // Choose the smallest between height and width and crop the other dimension.
	    System.out.println("Original width: " + image.getWidth(null));
	    System.out.println("Original height: " + image.getHeight(null));
	    int offsetX = 0;
	    int offsetY = 0;
	    int squareSide = 0;
	    
	    if (image.getHeight(null) < image.getWidth(null)) {
	    	squareSide = image.getHeight(null);
	    	offsetX =  (image.getWidth(null) - image.getHeight(null)) / 2;
	    } else {
	    	squareSide = image.getWidth(null);
	    	offsetY =  (image.getHeight(null) - image.getWidth(null)) / 2;
	    }
	    System.out.println("Final dimensions will be: " + squareSide + " x " + squareSide);
	    System.out.println("1: " + offsetX);
	    System.out.println("2: " + offsetY);
	    System.out.println("3: " + squareSide);
	    System.out.println("4: " + squareSide);
	    
	    image = Toolkit.getDefaultToolkit().createImage(new FilteredImageSource(image.getSource(), 
	    		new CropImageFilter(offsetX, 
	    							offsetY, 
	    							squareSide, 
	    							squareSide)));
	    System.out.println("Image cropped!");
	  return image;
  }
  
  
  
  
  
  public void paint(Graphics g) {
    super.paint(g);
    if (insets == null) {
      insets = getInsets();
    }
    g.drawImage(image, insets.left, insets.top, this);
  }
  public static void main(String args[]) {
    JFrame frame = new CropImage();
    frame.setSize(250, 250);
    frame.show();
  }
}