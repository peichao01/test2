<%@ page contentType="text/html; charset=UTF8" %>
<%@ page import="java.util.*" %>
<html>
<body>
	<form name="form1" action="instring.jsp" method="post">
	<input type="text" name="jcs">
	<input type="submit" name="submit" value="submit">
	</form>

<%! String s = null; %>

<%
s = request.getParameter("jcs");
if(s == null){
	out.println("please input the inputs!");
}
else if(s == ""){
	out.println("it is empty string you typed");
}
else {
	out.println("you input: " + s);
}
%>
</body>
</html>
