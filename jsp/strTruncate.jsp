<%@ page contentType="text/html; charset=UTF8" %>
<%@ page import="java.util.*" %>
<html>
<head><title>长字符串截取示例</title></head>
<body>
<%!
public static String strTruncate(String source, int len, String delim) {
	if(source == null) return null;
	int start, stop, byteLen;
	int alen = source.getBytes().length;
	if(len > 0){
		if(alen <= len) return source;
		start = stop = byteLen = 0;
		while(byteLen <= len){
			if(source.substring(stop, stop + 1).getBytes().length == 1){
				byteLen += 1;
			}
			else{
				byteLen += 2;
			}
			stop++;
		}
		StringBuffer sb = new StringBuffer(source.substring(start, stop - 1));
		if(alen > len) sb.append(delim);
		return sb.toString();
	}
	return source;
}
%>
<%
String s1 = new String("[2014年3月1日]物联网应用技术专业正式获得教育部批准！");
String s2 = new String("[2014年6月1日]我系一本新的著作正式在电子工业出版社出版！");
String s3 = new String("[2014年4月30日]SOA项目组形成一代集成平台版本。");
out.println("长字符串截图示例：<br>");
out.println(strTruncate(s1, 40, "...") + "<br>");
out.println(strTruncate(s2, 40, "...") + "<br>");
out.println(strTruncate(s3, 40, "...") + "<br>");
%>
</body>
</html>
