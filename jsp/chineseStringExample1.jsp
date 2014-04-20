<%@ page contentType="text/html; charset=UTF8" %>
<%!
public String codeToString(String str) {
	String s = str;
	try{
		byte[] tempB = s.getBytes("ISO-8859-1");
		s = new String(tempB);
		return s;
	}
	catch(Exception e) {
		return s;
	}
}
%>
<!doctype html>
<html>
<head><meta charset="utf-8"></head>
<body>
	<form name="form1" action="chineseStringExample1.jsp" method="post">
		请输入你的姓名：
		<input type="text" name="username">
		<input type="submit" value="提交">
	</form>
	<br>
<%
if(request.getParameter("username") == null) {
	out.println("你没有输入姓名。");
} else {
	out.println("你输入的姓名为：" + codeToString(request.getParameter("username")));
}
%>
</body>
</html>
