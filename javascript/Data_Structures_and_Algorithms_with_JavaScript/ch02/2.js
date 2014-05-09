// node js
Array.matrix = function(numrows, numcols, initial){
	var arr = [];
	for(var i = 0; i < numrows; ++i){
		var columns = [];
		for(var j = 0; j < numcols; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

var nums = Array.matrix(5,5,0);
console.log(nums);

var names = Array.matrix(3,3,"Joe");
console.log(names);
