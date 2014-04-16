<%@ page contentType="text/html; charset=UTF8" %>

<html>
<body>
<%

String s = new String("Hi!");
char[] chars = {'a', 'b', 'c', 'd'};
String s2 = new String(chars);
String s3 = new String(chars, 1, 3);
String s4 = new String("1bcd");

%>
<%= s %><br>
<%= chars %><br>
<%= s2 %><br>
<%= s3 %><br>
s length<%= s.length() %><br>
字符串链链接：<% out.println("output a boolean value: " + true); %><br>
s2.equals(chars): <%= s2.equals(chars) %><br>
s2.regionMatches(1, s4, 1, 3): <%=s2.regionMatches(1, s4, 1, 3)%><br>
s2.startsWith("a"):<%= s2.startsWith("a") %><br>
s2.startsWith("b", 1):<%= s2.startsWith("b", 1) %><br>
s2.endsWith("d"): <%= s2.endsWith("d") %><br>
</body>
</html>
