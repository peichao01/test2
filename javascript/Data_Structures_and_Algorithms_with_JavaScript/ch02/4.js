//SpiderMonkey javascript shell
var grades = [
	[89,77,78],
	[76,82,81],
	[91,94,89],
	[63,83,75]
];
var totalOfCols = [];
for(var row = 0; row < grades.length; ++row){
	var total;
	for(var col = 0; col < grades[row].length; ++col){
		totalOfCols[col] || (totalOfCols[col] = 0);
		totalOfCols[col] += grades[row][col];
	}
}
print(totalOfCols);
for(var i = 0; i < totalOfCols.length; i++){
	var average = totalOfCols[i] / grades.length;
	print("Test " + parseInt(i + 1) + " average: " + average.toFixed(2));
}
