<%@ page contentType="text/html; charset=UTF8" %>

<html>
<body>
<%!
int counter = 0;
synchronized void counterFunction(){
	counter++;
}
%>
<% counterFunction(); %>
网站计数器：<br>
你是第<%= counter %>位访问者
<br><br>
<%= getServletInfo() %>
</body>
</html>
