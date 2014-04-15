<%@ page contentType="text/html; charset=UTF8"%>
<html>
<body>
<%
int i, j, k;
int intArray[][] = new int[5][6];
k = 0;
int maxWidth = 0;

for(i = 0; i < 5; i++){
	for(j = 0; j < 6; j++){
		intArray[i][j] = k;
		k++;
	}
}

for(i=0; i<5; i++){
	for(j=0; j<6; j++)
		out.print(intArray[i][j] + " ");
	out.print("<br>");
}

%>
</body>
</html>
