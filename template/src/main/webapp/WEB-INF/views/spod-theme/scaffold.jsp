<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<jsp:include page="./head.jsp" />
</head>
<body>

	<jsp:include page="./header.jsp" />
    
    <section class="page-header-title">
        <div class="container">
            <div class="row">
                <div class="page-header-title-content span12">
                    <h1>This is App Template</h1>
                    <span class="teaser-desc">Mirum est notare quam littera gothica, quam nunc putamus parum claram.</span>
                </div><!-- /page-header-title-content -->
            </div>
        </div><!-- /container -->
    </section><!-- /page-header-title -->
    
    
    <div class="container">
        <div class="row">
            
            <div class="page-teaser span12">
                <h2>
                Hello! Me name is
                <span>Spod</span>
                and I'm Responsive Twitter Bootstrap Theme
                </h2>
                <span class="teaser-desc">Mirum est notare quam littera gothica, quam nunc putamus parum claram.</span>
            </div>
            
            
            <section id="service-images" class="span12">
                <div class="row">
                    
                    <div class="service span3">                    
                        <div class="circle-image">
                            <img src="images/round/round-1.png" alt="">
                        </div>
                        <h4>Development</h4>
                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>     
                    </div>
                    
                    <div class="service span3">
                        <div class="circle-image">
                            <img src="images/round/round-2.png" alt="">
                        </div>
                        <h4>Ideas</h4>
                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                    </div>
                    
                    <div class="service span3">
                        <div class="circle-image">
                            <img src="images/round/round-3.png" alt="">
                        </div>
                        <h4>Support</h4>
                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                    </div>
                    
                    <div class="service span3">
                        <div class="circle-image">
                            <img src="images/round/round-4.png" alt="">
                        </div>
                        <h4>Creativity</h4>
                        <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                    </div>
                    
                </div><!-- /row -->      
            </section>
            
            
            <section id="recent-work" class="span12">
                <div class="row">
                    <div class="page-sub-title span12">
                        <h3>Recent work</h3>
                    </div>
                    
                    <div class="recent-project span3">
                            <div class="box1">
                                <h4>Project Name</h4>
                                <img src="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image1" alt="It's an image" title="">
                            </div>
                            
                            <div class="box2">
                                <div class="zoom-icon">
                                     <a class="zoom" rel="prettyPhoto" href="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image1"></a>
                                </div>
                                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                            </div>
                    </div>
                    
                    <div class="recent-project span3">
                            <div class="box1">
                                <h4>Project Name</h4>
                                <img src="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image2" alt="It's an image" title="">
                            </div>
                            <div class="box2">
                                
                                <div class="zoom-icon">
                                     <a class="zoom" rel="prettyPhoto" href="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image2"></a>
                                </div>
                                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                            </div>
                    </div>
                    
                    <div class="recent-project span3">
                            <div class="box1">
                                <h4>Project Name</h4>
                                <img src="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image3" alt="It's an image" title="">
                            </div>
                            <div class="box2">
                                
                                <div class="zoom-icon">
                                     <a class="zoom" rel="prettyPhoto" href="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image3"></a>
                                </div>  
                                
                                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                            </div>
                    </div>
                    
                    <div class="recent-project span3">
                            <div class="box1">
                                <h4>Project Name</h4>
                                <img src="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image4" alt="It's an image" title="">
                            </div>
                            <div class="box2">
                                
                                <div class="zoom-icon">
                                     <a class="zoom" rel="prettyPhoto" href="http://placehold.it/260x200/4D99E0/ffffff.png&amp;text=image4"></a>
                                </div>
                                
                                <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                            </div>
                    </div>
                </div>
            </section>
        </div><!-- /row -->
    </div><!-- /container -->


   	<jsp:include page="./footer.jsp" /> 


</body>
</html>