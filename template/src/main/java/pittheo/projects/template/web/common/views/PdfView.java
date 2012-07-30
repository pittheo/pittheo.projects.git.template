package pittheo.projects.template.web.common.views;

import java.awt.Color;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.view.document.AbstractPdfView;

import com.lowagie.text.BadElementException;
import com.lowagie.text.Chunk;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Element;
import com.lowagie.text.ExceptionConverter;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Image;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.BaseFont;
import com.lowagie.text.pdf.FontSelector;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfPageEventHelper;
import com.lowagie.text.pdf.PdfWriter;

public class PdfView extends AbstractPdfView {

	private static final float LEADING_POINT = 1.2f;
	public FontSelector fs;
	
	public DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
	public NumberFormat intFormatter = new DecimalFormat("##");
	
	public String localImagesURI;

	/** Paths to and encodings of fonts we're going to use in this example */
    public static String[][] FONTS = {
        {"c:/windows/fonts/arialuni.ttf", BaseFont.IDENTITY_H}
    };
	
    
    @Override
    /**
    * Override to produce a landscape format.
    */
    protected Document newDocument() {
    	return new Document(PageSize.A4.rotate());
    }
    
	protected void buildPdfDocument(Map model, Document doc, PdfWriter writer, HttpServletRequest req, HttpServletResponse resp) throws Exception {
		System.out.println("In PDFView. Starting...");
		//Stelexos stelexos = (Stelexos) model.get("stelexos");

		fs = new FontSelector();
        for (int i = 0; i < FONTS.length; i++) {
            fs.addFont(FontFactory.getFont(FONTS[i][0], FONTS[i][1], BaseFont.EMBEDDED));
        }
		
        doc.setMargins(30, 30, 90, 40);
        
		// SET UP THE LOGO & HEADER

        TableHeader event = new TableHeader();
        writer.setPageEvent(event);
        
        doc.open();
        
        // STELEXOS IMAGE
        //String imageUrl = stelexos.getThumbnailPath();

        
        // ADD STELEXOS INFO
        //addStelexosInfoTable(stelexos, doc);
        
		// ARMY SCHOOLS
/*		if (stelexos.getArmySchools() != null && stelexos.getArmySchools().size() > 0) {
			String[] headers = new String[6];
			headers[0] = "Όνομα Σχολείου";
			headers[1] = "Έτος";
			headers[2] = "Βαθμός";
			headers[3] = "Σειρά Επίδοσης";
			headers[4] = "Διάρκεια";

			String[][] data = new String[stelexos.getArmySchools().size()][6];
			for (int i = 0; i < stelexos.getArmySchools().size(); i++) {
				SchoolEntry sEntry = stelexos.getArmySchools().get(i);

				data[i][0] = sEntry.getSchool().getSchoolName();
				data[i][1] = String.valueOf(sEntry.getGraduationYear());
				if (sEntry.getGradeTotal() != null && !"".equals(sEntry.getGradeTotal())) {
					data[i][2] = sEntry.getGrade() + " / " + sEntry.getGradeTotal();	
				} else {
					data[i][2] = sEntry.getGrade();
				}
				
				if (sEntry.getRanked() > 0 && sEntry.getRankedTotal() > 0) {
					data[i][3] = String.valueOf(sEntry.getRanked()) + fs.process("ος") + " / " + String.valueOf(sEntry.getRankedTotal());	
				} else {
					data[i][3] = "";
				}
				
				if (sEntry.getDuration() > 0 && !(sEntry.getDurationInterval().equals("") || sEntry.getDurationInterval().equals("0"))) {
					data[i][4] = intFormatter.format(sEntry.getDuration()) + " " + sEntry.getDurationInterval();
				} else {
					data[i][4] = "";
				}
				data[i][5] = sEntry.getComments();
			}
			addTable("ΣΤΡΑΤΙΩΤΙΚΑ ΣΧΟΛΕΙΑ", data, headers, doc);
		}*/
		
		Paragraph emptyLine = this.getEmptyLine();
		doc.add(emptyLine);
		emptyLine = this.getEmptyLine();
		doc.add(emptyLine);


		// LANGUAGE CERTIFICATES
/*		if (stelexos.getLanguageCertificates() != null && stelexos.getLanguageCertificates().size() > 0) {
			String[] headers = new String[5];
			headers[0] = "Γλώσσα";
			headers[1] = "Όνομα Πτυχίου";
			headers[2] = "Έτος Αποφοίτησης";
			headers[3] = "Βαθμός";
			headers[4] = "Παρατηρήσεις";
			
			String[][] data = new String[stelexos.getLanguageCertificates().size()][5];
			for (int i = 0; i < stelexos.getLanguageCertificates().size(); i++) {
				LanguageCertificateEntry lce = stelexos.getLanguageCertificates().get(i);
				//doc.add(new Paragraph((String) lce.getSchool().getSchoolName()));
	
				data[i][0] = lce.getSchool().getLang();
				data[i][1] = lce.getSchool().getSchoolName();
				data[i][2] = String.valueOf(lce.getGraduationYear());
				data[i][3] = lce.getGrade();
				data[i][4] = lce.getComments();
			}
			addTable("ΠΤΥΧΙΑ ΓΛΩΣΣΩΝ", data, headers, doc);
		}*/
		doc.newPage();
		
		doc.close();
	}

	private void addTable(String title, String[][] data, String[] headers, Document doc)
			throws DocumentException, IOException {
		PdfPTable table;
		//PdfPTable tmpTable;
		PdfPCell pdfCell;
		Phrase phrase;
		table = this.getTableWithLegend(title, data[0].length);
		
		//PdfPCell cell = null;
		
		// First add the headers in bold
		for (int i = 0; i<headers.length; i++) {
			phrase = fs.process(headers[i]);
			Paragraph p = new Paragraph(phrase);
			p.setFont(getTitleFont());
			pdfCell = new PdfPCell(p);
			pdfCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
			table.addCell(pdfCell);
		}
		
		for (int i = 0; i<data.length; i++) {
			for (int j = 0; j<data[i].length; j++) {
				phrase = fs.process(data[i][j]);
				table.addCell(phrase);
			}
		}
		
		/*List<String> strList = new ArrayList<String>();
		strList.add("Something");
		strList.add(list.get(0));
		tmpTable = this.getTableContentWithCustomBorderAndWithoutHeader(
				strList, 2, PdfPCell.ALIGN_LEFT, new int[] { 2 });
		pdfCell = new PdfPCell(tmpTable);
		pdfCell.setColspan(2);
		pdfCell.setPaddingTop(2);
		pdfCell.setPaddingBottom(2);
		pdfCell.setPaddingRight(2);
		table.addCell(pdfCell);*/
		table.setSpacingAfter(20);
		doc.add(table);
	}

	public PdfPTable getTableWithLegend(String legend, int numCols)
			throws DocumentException, IOException {
		PdfPTable table = new PdfPTable(numCols);
        table.getDefaultCell().setPadding(3);
        table.getDefaultCell().setUseAscender(true);
        table.getDefaultCell().setUseDescender(true);
		table.setWidthPercentage(100);
		
		Paragraph paragraph = this.getParagraphTitle(legend, Element.ALIGN_LEFT);
		PdfPCell pdfPCell = new PdfPCell(paragraph);
		pdfPCell.setHorizontalAlignment(PdfPCell.ALIGN_LEFT);
		pdfPCell.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
		pdfPCell.setBackgroundColor(new Color(170, 220, 255));
		pdfPCell.setColspan(numCols);
		
		table.addCell(pdfPCell);	// Added the header
		return table;
	}

	public Font getTitleFont() throws DocumentException, IOException {
		Font font = new Font(Font.HELVETICA, 11, Font.BOLD);
		return font;
	}

	public Paragraph getParagraphTitle(String text, int aligment)
			throws DocumentException, IOException {
		Font font = getTitleFont();
		//Chunk chunk = new Chunk(text, font);
		//Phrase phrase = new Phrase(chunk);
		Phrase phrase = fs.process(text);
		phrase.setLeading(LEADING_POINT * font.getSize());
		Paragraph paragraph = new Paragraph(phrase);
		paragraph.setAlignment(aligment);
		return paragraph;
	}
	
	
	
	
/*	private void addStelexosInfoTable(Stelexos stelexos, Document doc) throws DocumentException, IOException {
		PdfPTable table;
		PdfPTable tmpTable;
		PdfPCell pdfCell;
		
		String[] stelexosFields = new String[9];
		stelexosFields[0] = "AM";
		stelexosFields[1] = "Προέλευση Βαθμού";
		stelexosFields[2] = "Όνομα Πατρός";
		stelexosFields[3] = "Ημερομηνία Γέννησης";
		stelexosFields[4] = "Ειδικότητα";
		stelexosFields[5] = "Οικογενειακή Κατάσταση";
		stelexosFields[6] = "Πόλη Διαμονής";
		stelexosFields[7] = "Τηλέφωνο";
		stelexosFields[8] = "Παρατηρήσεις";
		
	    List<String> stelexosData = new ArrayList<String>();
        stelexosData.add(stelexos.getASM());
        stelexosData.add(stelexos.getRankOriginWithYear());
        stelexosData.add(stelexos.getFatherName());
        stelexosData.add(formatter.format(stelexos.getDateOfBirth()));
        if (stelexos.getSpecialty() != null) {
        	stelexosData.add(stelexos.getSpecialty().getCode() + " - " + stelexos.getSpecialty().getName());	
        } else {
        	stelexosData.add("-");
        }
        
        stelexosData.add(stelexos.getMaritalStatusName());
        stelexosData.add(stelexos.getCity());
        stelexosData.add(stelexos.getTelephoneNum());
        stelexosData.add(stelexos.getComments());
		
		table = this.getTableWithLegend(stelexos.getPreTitle() + " " + stelexos.getRankName() + " (" + stelexos.getOplo() + ") " + stelexos.getSurname() + " " + stelexos.getFirstName(), 2);
		
		for (int i = 0; i<stelexosData.size(); i++) {
			List<String> strList = new ArrayList<String>();
			strList.add(stelexosFields[i]);
			strList.add(stelexosData.get(i));
			tmpTable = this.getTableContentWithCustomBorderAndWithoutHeader(strList, 2, PdfPCell.ALIGN_LEFT, new int[] { 2 });
			pdfCell = new PdfPCell(tmpTable);
			pdfCell.setColspan(2);
			pdfCell.setPaddingTop(2);
			pdfCell.setPaddingBottom(2);
			pdfCell.setPaddingRight(2);
			table.addCell(pdfCell);
		}
		table.setSpacingAfter(20);
		doc.add(table);
		
		URL imageURL = new URL(stelexos.getOriginalPath());
		Image image1 = Image.getInstance(imageURL);
		image1.scalePercent(20f);
		doc.add(image1);	
		
		//doc.a
	}*/
	
	
	

	/*
	 * (non-Javadoc)
	 * 
	 * @see eu.ohim.fwm.opt.filing.ui.common.pdf.base.ITextBase#getEmptyLine()
	 */
	public Paragraph getEmptyLine() throws DocumentException, IOException {
		Font font = this.getContentFont(Font.NORMAL);
		Chunk chunk = new Chunk(" ", font);
		Phrase phrase = new Phrase(chunk);
		Paragraph paragraph = new Paragraph(phrase);
		paragraph.setLeading(LEADING_POINT * font.getSize());
		return paragraph;
	}

	public Font getContentFont(int fontStyle) throws DocumentException,
			IOException {
		Font font = new Font();
		return font;
	}

	public PdfPTable getTableContentWithCustomBorderAndWithoutHeader(List<String> cellTextList, int columnNum, int cellAligment,
			int[] cellBorderIndex) throws DocumentException, IOException {
		PdfPTable table = new PdfPTable(columnNum);
		if (cellTextList != null) {
			table.setWidthPercentage(100);
			if (columnNum == 2) {
				float[] widths = { 1f, 3f };
				table.setWidths(widths);
			}
			if (cellTextList.size() >= columnNum) {
				int count = 1;
				Paragraph paragraph = null;
				for (String text : cellTextList) {

					// check for null pointers and replace
					text = nvl(text);

					paragraph = getParagraphContent(text, cellAligment,	Font.NORMAL);
					PdfPCell pdfPCell = new PdfPCell(paragraph);
					if (cellBorderIndex != null && cellBorderIndex.length > 0) {
						for (int i = 0; i < cellBorderIndex.length; i++) {
							if (count == cellBorderIndex[i]) {
								count = 0;
							} else {
								pdfPCell.setBorder(0);
							}
						}
					}

					pdfPCell.setHorizontalAlignment(cellAligment);
					table.addCell(pdfPCell);
					count++;
				}
			} else {
				System.err
						.println("The cells number are less than columns number. Cannot be displayed!");
				throw new DocumentException(
						"The cells number are less than columns number. Cannot be displayed!");
			}
		} else {
			System.err
					.println("The cell text list is null. The table cannot be displayed!");
			throw new DocumentException(
					"The cell text list is null. The table cannot be displayed!");
		}
		return table;
	}

	public Paragraph getParagraphContent(String text, int aligment,	int fontStyle) throws DocumentException, IOException {
		Font font = getContentFont(fontStyle);
		Phrase phrase = new Phrase(fs.process(text));
		phrase.setLeading(LEADING_POINT * font.getSize());
		Paragraph paragraph = new Paragraph(phrase);
		paragraph.setAlignment(aligment);
		return paragraph;
	}

	private static String nvl(String value) {
		if (value == null) {
			// log.warn("Text value is null. Using empty string as replacement.");
			return "";
		} else
			return value;
	}
	
	
	/**
     * Inner class to add a table as header.
     */
    class TableHeader extends PdfPageEventHelper {
        /** The header text. */
        String header;
        /** The template with the total number of pages. */
        //PdfTemplate total;
 
        /**
         * Allows us to change the content of the header.
         * @param header The new header String
         */
        public void setHeader(String header) {
            this.header = header;
        }
 
        /**
         * Creates the PdfTemplate that will hold the total number of pages.
         * @see com.itextpdf.text.pdf.PdfPageEventHelper#onOpenDocument(
         *      com.itextpdf.text.pdf.PdfWriter, com.itextpdf.text.Document)
         */
        public void onOpenDocument(PdfWriter writer, Document document) {
            //total = writer.getDirectContent().createTemplate(30, 16);
        }
 
        /**
         * Adds a header to every page
         * @see com.itextpdf.text.pdf.PdfPageEventHelper#onEndPage(
         *      com.itextpdf.text.pdf.PdfWriter, com.itextpdf.text.Document)
         */
        public void onEndPage(PdfWriter writer, Document document) {
            PdfPTable table = new PdfPTable(2);
            PdfPCell pdfCell;
            
            Image img = null;
			try {
				img = Image.getInstance(new URL("http://" + localImagesURI + "/dmk_logo.gif"));
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (BadElementException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            img.scaleToFit(57, 47);
            
            try {
                table.setWidths(new int[]{17, 60});
                table.setTotalWidth(784);
                table.setLockedWidth(true);
                pdfCell = new PdfPCell(img);
                pdfCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                table.addCell(pdfCell);
                
                //table.getDefaultCell().setHorizontalAlignment(Element.ALIGN_RIGHT);
                //String headerText = "Δ' ΜΟΙΡΑ ΚΑΤΑΔΡΟΜΩΝ";
                
                PdfPTable innerHeaderTable = new PdfPTable(1);
                PdfPCell cell;
                //cell = new PdfPCell(fs.process(headerText));
                //cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                
                //innerHeaderTable.addCell(cell);

                String title = "ΑΤΟΜΙΚΟ ΦΥΛΛΟ ΕΚΠΑΙΔΕΥΣΕΩΣ";
                cell = new PdfPCell(fs.process(title));
                cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
                innerHeaderTable.addCell(cell);

                table.addCell(innerHeaderTable);
                
                //PdfPCell cell = new PdfPCell(Image.getInstance(total));
                //cell.setBorder(Rectangle.BOTTOM);
                //table.addCell(cell);
                table.writeSelectedRows(0, -1, 26, 575, writer.getDirectContent());
            }
            catch(DocumentException de) {
                throw new ExceptionConverter(de);
            }
        }
 
        /**
         * Fills out the total number of pages before the document is closed.
         * @see com.itextpdf.text.pdf.PdfPageEventHelper#onCloseDocument(
         *      com.itextpdf.text.pdf.PdfWriter, com.itextpdf.text.Document)
         */
        public void onCloseDocument(PdfWriter writer, Document document) {
            //ColumnText.showTextAligned(total, Element.ALIGN_LEFT,
            //        new Phrase(String.valueOf(writer.getPageNumber() - 1)),
            //        2, 2, 0);
        }
    }


	public String getLocalImagesURI() {
		return localImagesURI;
	}

	public void setLocalImagesURI(String localImagesURI) {
		this.localImagesURI = localImagesURI;
	}
    
    
 

}
