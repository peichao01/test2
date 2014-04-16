<%@ page contentType="text/html; charset=UTF8" %>
<html>
<body>
<%
StringBuffer s = new StringBuffer("He is also a student.");
out.println("StringBuffer s is: " + s + "<br>");
out.println("length of s: " + s.length() + "<br>");
out.println("capacity of s: " + s.capacity()+ "<br>");
out.println("the third char of s is: " + s.charAt(2) + "<br>");
out.println("the substring from 3 to 6 is: " + s.substring(2, 5) + "<br>");
out.println("the content after append to s is: " + s.append("Me, too.") + "<br>");
out.println("the string after reverse is: " + s.reverse() + "<br>");

%>
</body>
</html>
