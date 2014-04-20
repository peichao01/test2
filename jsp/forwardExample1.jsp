<%@ page contentType="text/html; charset=UTF8" %>
<html>
<body>
<form name="form1" action="forwardExample1.jsp" method="post">
程序示例链接：
<select name="goaddress" onchange="javascript:form1.submit()">
<option value="novalue"></option>
<option value="1">实例4-2</option>
<option value="2">实例4-11</option>
<option value="3">实例4-14</option>
</select>
</form>
<%
String s = null;
s = request.getParameter("goaddress");
if(s!=null){
	switch(s.charAt(0)){
		case '1': 
%>
			<jsp:forward page="xhApp1.jsp"/>
<%
			break;
		case '2':
%>
			<jsp:forward page="sampleCounterApp1.jsp"/>
<%
			break;
		case '3':
%>
			<jsp:forward page="includeSample1.jsp"/>
<%
			break;
		default:
			out.println("你没有选择");
	}
}
%>
</body>
</html>
