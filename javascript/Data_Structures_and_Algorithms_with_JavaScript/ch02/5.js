//SpiderMonkey javascript shell
function Point(x, y){
	this.x = x;
	this.y = y;
}

function displayPoints(array){
	for(var i = 0; i < array.length; i++){
		print(array[i].x + ", " + array[i].y);
	}
}

var points = [
	new Point(1, 2),
	new Point(3, 5),
	new Point(2, 8),
	new Point(4, 4)
];

for(var i = 0; i < points.length; i++){
	print("Point " + parseInt(i + 1) + ": " + points[i].x + ", " + points[i].y);
}

var p5 = new Point(12, -3);
points.push(p5);
print("After push: ");
displayPoints(points);
points.shift();
print("After shift: ");
displayPoints(points);
