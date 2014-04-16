<%@ page contentType="text/html; charset=UTF8" %>
<%@ page import="java.util.*" %>
<html>
<body>
<%
String s = "this is a student.";
int startPosition = 1;
int endPosition = 7;
char[] pointChars = new char[endPosition - startPosition];
s.getChars(startPosition, endPosition, pointChars, 0);
out.println(pointChars);
%>
<br>
<%= s %><br>
<%= s.getBytes().toString() %><br>
<%= s.equals("This is a student.") %><br>
<%= s.equalsIgnoreCase("This is a student.") %>
</body>
</html>
