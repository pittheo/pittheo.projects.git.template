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

                    <div class="span9">
                        <div class="row">
                            <div class="page-sub-title span9">
                                <h3>Create a new Message</h3>
                            </div>
                        </div>
                        <form class="form-horizontal" action="/template/messages" method="POST">
						<div class="control-group">
				            <label class="control-label" for="input01">Sender</label>
				            <div class="controls">
				              <input type="text" placeholder="Username of the sender" class="input-xlarge" id="input01">
				              <p class="help-block">Facebook-style autosuggest with user data.</p>
				            </div>
				        </div>
		                <div class="control-group">
				            <label class="control-label" for="input01">Receiver</label>
				            <div class="controls">
				              <input type="text" placeholder="Username of the receiver" class="input-xlarge" id="input01">
				              <p class="help-block">Facebook-style autosuggest with user data.</p>
				            </div>
				        </div>
                        <div class="control-group">
				            <label class="control-label" for="input01">Subject</label>
				            <div class="controls">
				              <input type="text" class="input-xlarge" id="input01">
				              <p class="help-block">In addition to freeform text, any HTML5 text-based input appears like so.</p>
				            </div>
				        </div>
                        <div class="control-group">
				            <label class="control-label" for="input01">Message</label>
				            <div class="controls">
				              <textarea rows="5" placeholder="Story of your life." name="content" class="input-xlarge span6" id="input01"></textarea>
				            </div>
				        </div>
                        <div class="control-group">
				            <label class="control-label" for="select01">Folder</label>
				            <div class="controls">
				              <select id="select01">
				                <option>Inbox</option>
				                <option>Personal</option>
				                <option>Business</option>
				              </select>
				         	</div>
				         </div>
                        
                        <button class="btn btn-large btn-success pull-right" type="submit">Create</button>
                        
                        </form>
                    </div><!--/span6 box-->

                </div><!-- /row -->
               
            </section><!-- /contact -->
            
        </div><!-- /row -->
    </div><!-- /container -->

    
   	<jsp:include page="../spod-theme/footer.jsp" /> 


</body></html>