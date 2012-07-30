<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<jsp:include page="../spod-theme/head.jsp" />
</head>
<body>

	<jsp:include page="../spod-theme/header.jsp" />
    
    <div class="container">
        <div class="row">
            
            <section id="contact" class="span12">
                
                <div class="row">

                    <div class="span3">
                        <div class="row">
                            <div class="page-sub-title span3">
                                <h3>User Picture</h3>
                            </div>
                        </div>
                        
                        <div class="content-box box">
                            <img src="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image1" alt="${user.username}" title="">
                        </div>
                        <button style="width: 100%; margin-top: 5px; text-align: center; display: block;" class="btn btn-success" type="submit">Upload</button>
                    </div><!--/span3 box-->
                    
                    <div class="span9">
                        <div class="row">
                            <div class="page-sub-title span9">
                                <h3>${user.username}</h3>
                            </div>
                        </div>
                        <div class="control-group">
				            <label class="control-label" for="input01">Real Name</label>
				            <div class="controls">
				              <p class="help-block">${user.profile.name} ${user.profile.surname}</p>  
				            </div>
				        </div>
                        <div class="control-group">
				            <label class="control-label" for="input01">Email</label>
				            <div class="controls">
				            	<p class="help-block">${user.email}</p>  
				            </div>
				        </div>
                        <div class="control-group">
				            <label class="control-label" for="input01">Location</label>
				            <div class="controls">
				              <p class="help-block">${user.profile.locationName}</p>  
				            </div>
				        </div>
                        <div class="control-group">
				            <label class="control-label" for="input01">Website</label>
				            <div class="controls">
				              <p class="help-block">${user.profile.website}</p>  
				            </div>
				        </div>
                        <button class="btn btn-large btn-success pull-right" type="submit">Edit</button>
                    </div><!--/span6 box-->

                </div><!-- /row -->
               
            </section><!-- /contact -->
            
        </div><!-- /row -->
    </div><!-- /container -->

    
   	<jsp:include page="../spod-theme/footer.jsp" /> 


</body></html>