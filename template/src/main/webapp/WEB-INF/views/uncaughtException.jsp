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
	
    <section class="page-header-title">
        <div class="container">
            <div class="row">
                <div class="page-header-title-content span12">
                    <h1>Oooops! Page Not Found</h1>
                    <h4>Did you check the URL you are accessing?</h4>
                </div><!-- /page-header-title-content -->
            </div>
        </div><!-- /container -->
    </section><!-- /page-header-title -->
    
    
    <div class="container">
        <div class="row">
            
            <section id="error" class="span12">
                
                <span class="error404">404</span>
                <h4 class="error-content">The page you were looking for doesn't exist.</h4>
            </section><!-- /error -->
            
        </div><!-- /row -->
    </div><!-- /container -->

	<jsp:include page="./spod-theme/footer.jsp" />

</body></html>