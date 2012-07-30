<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

     <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
<!--
            <div class="container">

                <nav id="top-Bar-Menu">

                    <ul class="span12">
                        <li><a href="http://wbpreview.com/previews/WB07X982P/error404.html#">Terms Of Usage</a></li>
                        <li><a href="http://wbpreview.com/previews/WB07X982P/error404.html#">Privacy Policy</a></li>
                        <li><a href="/template/contactUs">Contact</a></li>                        
                    </ul>
                    
                 </nav><!-- /top-Bar-Menu -->

            <!--</div> --><!-- /container-fluid -->


<div class="navbar">
    <div class="navbar-inner">
      <div class="container">
        <div class="nav-collapse">
          <ul class="nav">
            <li class="active"><a href="#">Terms of Usage</a></li>
            <li class="active"><a href="#">Privacy Policy</a></li>
            <li class="active"><a href="/template/contactUs">Contact</a></li>
          </ul>
          <form class="navbar-search pull-right" action="">
            <input type="text" class="search-query span2" placeholder="Search">
          </form>
          <ul class="nav pull-right">
            <li class="active"><a href="#">Link</a></li>
            <li class="divider-vertical"></li>
            <li class="dropdown active">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Account <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="/template/logout?userId=${loggedUser.id}"><i class="icon-remove-sign"></i> Logout</a></li>
                <li><a href="#">Another action</a></li>
               
                <li class="divider"></li>
                <li><a href="#">Admin Page</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.nav-collapse -->
      </div>
    </div><!-- /navbar-inner -->
  </div>

            <!--<div class="border-bottom"></div>-->

        </div><!-- /navbar-inner -->
    </div><!-- navbar navbar-fixed-top -->
    
    <header class="header">
        <div class="container"> 
            <div class="row">

                <div id="logo" class="span2">Logo</div><!-- /logo -->

                <nav class="main-Bar-Menu">
                    
                        <ul id="main-Menu" class="nav nav-pills">
                            <li class="active"><a href="/template/">Home</a></li>

                            <li class="dropdown" id="menu3">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="/template/engine?form">
                                    The Engine
                                </a>
                            </li>
                            
                            <li class="dropdown" id="menu1">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="http://wbpreview.com/previews/WB07X982P/error404.html#menu1">
                                    Domain Model
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="/template/useraccounts">Users</a></li>
                                    <li><a href="/template/messages">Inbox</a></li>
                                    <li><a href="/template/blog">Blog</a></li>
                                    <li><a href="./Spod2_files/Spod2.htm">Error page</a></li>
                                </ul>
                            </li>

                            <li class="dropdown" id="menu2">
                                <a class="dropdown-toggle" data-toggle="dropdown" href="/template/blog">
                                    Blog
                                </a>
                            </li>

                            <li class="active"><a href="/template/contactUs">Contact</a></li>
                    </ul>
                    
                </nav><!-- /main-Bar-Menu -->
            
            </div><!-- /row -->
        </div><!-- /container -->
    </header><!-- /header -->