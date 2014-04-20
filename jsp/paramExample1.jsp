<%@ page contentType="text/html; charset=UTF8" %>
<html>
<body>
<%
String s = null;
s = "Let's go!";
%>
<jsp:forward page="forParam.jsp">
	<jsp:param name="s" value="<%= s %>"/>
</jsp:forward>
</body>
</html>
