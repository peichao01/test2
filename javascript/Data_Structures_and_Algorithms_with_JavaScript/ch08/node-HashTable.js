// node js

function HashTable(){
	this.table = new Array(137);
}

HashTable.prototype.put = function(data){
	//var pos = this.simpleHash(data);
	var pos = this.betterHash(data);
	this.table[pos] = data;
};

HashTable.prototype.simpleHash = function(data){
	var total = 0;
	for(var i = 0; i < data.length; i++){
		total += data.charCodeAt(i);
	}
	console.log('Hash value: ' + data + ' -> ' + total);
	return total % this.table.length;
};

HashTable.prototype.betterHash = function(string){
	const H = 37;
	var total = 0;
	for(var i = 0; i < string.length; i++){
		total += H * total + string.charCodeAt(i);
	}
	total = total % this.table.length;
	if(total < 0)
		total += this.table.length;
	return parseInt(total);
};

HashTable.prototype.showDistro = function(){
	var n = 0;
	for(var i = 0; i < this.table.length; i++){
		if(this.table[i] != undefined){
			console.log(i + ': ' + this.table[i]);
		}
	}
};

module.exports = HashTable;
