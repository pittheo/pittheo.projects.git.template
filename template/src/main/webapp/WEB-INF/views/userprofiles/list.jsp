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
                                <h3>List of User Accounts</h3>
                            </div>
                        </div>
                        
                        <c:if test="${not empty useraccounts}">
                        
	                        <h2>User Accounts</h2>
	                        <table>
							  <thead>
							    <tr>
							      <th>User Id</th>
							      <th>Username</th>
							      <th>Priviledges</th>
							      <th>&nbsp;</th>
							    </tr>
							  </thead>
							  <tbody>
							    <c:forEach var="user" items="${useraccounts}">
									<tr id="user-row-${user.id}">
										<td>${user.id}</td>
										<td>${user.username}</td>
										<td><c:if test="${user.priviledges == '1'}">
												Read/Write
											</c:if>
											<c:if test="${user.priviledges == '2'}">
												Read Only
											</c:if>
										</td>
										<td>
											<a style="margin-right: 7px;" user-id="${user.id}" href="" class="deleteUser" title="Διαγραφή"><i class="icon-remove"></i></a>
											<a user-id="${user.id}" href="/stelexi/signup?form&editMode=true&returnView=admin&userId=${user.id}" class="editUser" title="Επεξεργασία"><i class="icon-edit"></i></a>
										</td>
										<td></td>
									</tr>
								</c:forEach>
							  </tbody>
							</table>
                        </c:if>
                        
                        <c:if test="${empty useraccounts}">
	                        <div class="alert alert-info">
	            				<strong>Heads up!</strong> There are no users.
	          				</div>
                        	<h4>Would you like to create one?</h4>
                        </c:if>
                        
                        <a href="/template/useraccounts?form" class="btn btn-large btn-primary">Create New User</a>
                        <a href="/template/useraccounts?form" class="btn btn-large btn-primary pull-right">Create New User (AJAX)</a>
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