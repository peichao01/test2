// spider monkey js

function HashTable(){
	this.table = new Array(137);
}

HashTable.prototype.put = function(data){
	var pos = this.simpleHash(data);
	this.table[pos] = data;
};

HashTable.prototype.simpleHash = function(data){
	var total = 0;
	for(var i = 0; i < data.length; i++){
		total += data.charCodeAt(i);
	}
	return total % this.table.length;
};

HashTable.prototype.showDistro = function(){
	var n = 0;
	for(var i = 0; i < this.table.length; i++){
		if(this.table[i] != undefined){
			print(i + ': ' + this.table[i]);
		}
	}
};
