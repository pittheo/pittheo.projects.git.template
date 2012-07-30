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
                                <h3>List of Messages</h3>
                            </div>
                        </div>
                        
                        <c:if test="${not empty messages}">
                        
	                        <h2>User Accounts</h2>
	                        <table>
							  <thead>
							    <tr>
							      <th>Message Id</th>
							      <th>Type</th>
							      <th>Folder</th>
							      <th>Sender</th>
							      <th>Receiver</th>
							      <th>Subject</th>
							      <th>Content</th>
							      <th>isRead</th>
							      <th>isFlagged</th>
							      <th>isSpam</th>
							      <th>sentAt</th>
							      <th>&nbsp;</th>
							    </tr>
							  </thead>
							  <tbody>
							    <c:forEach var="message" items="${messages}">
									<tr id="message-row-${message.id}">
										<td>${message.type}</td>
										<td>${message.folder}</td>
										<td>${message.sender.username}</td>
										<td>${message.receiver.username}</td>
										<td>${message.subject}</td>
										<td>${message.content}</td>
										<td>${message.isRead}</td>
										<td>${message.flagged}</td>
										<td>${message.spam}</td>
										<td>${message.sentAt}</td>
										<td>
											<a style="margin-right: 7px;" message-id="${message.id}" href="" class="deleteMessage" title="Delete"><i class="icon-remove"></i></a>
											<a message-id="${message.id}" href="/stelexi/signup?form&editMode=true&returnView=admin&messageId=${message.id}" class="editMessage" title="Edit"><i class="icon-edit"></i></a>
										</td>
										<td></td>
									</tr>
								</c:forEach>
							  </tbody>
							</table>
                        </c:if>
                        
                        <c:if test="${empty messages}">
	                        <div class="alert alert-info">
	            				<strong>Heads up!</strong> There are no messages.
	          				</div>
                        	<h4>Would you like to create one?</h4>
                        </c:if>
                        
                        <a href="/template/messages?form" class="btn btn-large btn-primary">Create New Message</a>
                        <a href="/template/messages?form" class="btn btn-large btn-primary pull-right">Create New Message (AJAX)</a>
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

    
   	<jsp:include page="../spod-theme/footer.jsp" /> 


</body></html>