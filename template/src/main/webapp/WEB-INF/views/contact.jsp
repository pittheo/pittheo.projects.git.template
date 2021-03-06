<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<jsp:include page="./spod-theme/head.jsp" />
</head>
<body>

	<jsp:include page="./spod-theme/header.jsp" />
    
    <div class="container">
        <div class="row">
            
            <section id="contact" class="span12">
                
                <div class="row">

                    <div class="span9">
                        <div class="row">
                            <div class="page-sub-title span9">
                                <h3>Send me a message</h3>
                            </div>
                        </div>
                        
                        <input class="span5 contact-input" type="text" placeholder="Name" style="margin-right:10px;" name="name">
                        <input class="span5 contact-input" type="text" placeholder="Email" name="email">
                        <textarea class="span9 contact-textarea" rows="2" placeholder="Message" name="message" type="text"></textarea>
                        <button class="btn btn-success" type="submit">Send message</button>
                    </div><!--/span6 box-->

                    <div class="span3">
                        <div class="row">
                            <div class="page-sub-title span3">
                                <h3>Contact information</h3>
                            </div>
                        </div>
                        
                        <div class="content-box box">
                            <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per</p>
                            <span>
                                <strong> Aress:</strong>
                                123456 Street Name, City Name
                            </span>
                            <br>
                            <span>
                                <strong> Phone:</strong>
                                (0123) 456-7890
                            </span>
                            <br>
                            <span>
                                <strong> Website:</strong>
                                http://yoursitename.com
                            </span>
                            <br>
                            <span>
                                <strong> Email:</strong>
                                info@yoursitename.com
                            </span>
                        </div>
                    </div><!--/span4 box-->

                </div><!-- /row -->
               
            </section><!-- /contact -->
            
        </div><!-- /row -->
    </div><!-- /container -->

    
   	<jsp:include page="./spod-theme/footer.jsp" /> 


</body></html>