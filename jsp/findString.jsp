<%@ page contentType="text/html; charset=UTF8" %>
<html>
<body>
<%
String s = new String();
s = "I am a student, he is also a student.";
out.println("字符串 s 为：" + s + "<br>");
out.println(s.indexOf('a') + "<br>");
out.println(s.lastIndexOf('a') + "<br>");
out.println(s.indexOf("en") + "<br>");
out.println(s.lastIndexOf("en") + "<br>");
out.println(s.indexOf('a', 4) + "<br>");
out.println(s.lastIndexOf('a', 4) + "<br>");
out.println(s.indexOf("en", 14) + "<br>");
out.println(s.lastIndexOf("en", 14) + "<br>");
%>
</body>
</html>
