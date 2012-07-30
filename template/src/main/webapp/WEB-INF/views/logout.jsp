<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<span id="userAreaSpace">
<c:if test="${not empty loggedIn}">
   <form id="logoutForm" action="/betit/logout" method="post">
   		Welcome, <b><span id="loggedUserArea"><a href="/betit/useraccounts/${loggedUser.id}">${loggedUser.username}</a></span></b>
   		<input class="button" name="logoutButton" type="submit" value="Logout"/>
   		<input id="loggedUserId" type="hidden" name="userId" value="<c:out value="${loggedUser.id}" />"/>
   </form>		
</c:if>
</span>