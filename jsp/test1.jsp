<%@ page contentType="text/html; charset=UTF8" %>

<html>
<body>
<%

String s = new String("Hi!");
char[] chars = {'a', 'b', 'c', 'd'};
String s2 = new String(chars);
String s3 = new String(chars, 1, 3);

%>
<%= s %><br>
<%= chars %><br>
<%= s2 %><br>
<%= s3 %><br>
s length<%= s.length() %><br>
字符串链链接：<% out.println("output a boolean value: " + true); %><br>

</body>
</html>
