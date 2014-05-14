function Dictionary(){
	this.datastore = new Array();
}

Dictionary.prototype.add = function(key, value){
	this.datastore[key] = value;
};

Dictionary.prototype.find = function(key){
	return this.datastore[key];
};

Dictionary.prototype.remove = function(key){
	delete this.datastore[key];
};

Dictionary.prototype.each = function(fn){
	var datastore = this.datastore;
	//var keys = Object.keys(datastore);
	var keys = Object.keys(datastore).sort();
	//for(var key in datastore){
	for(var i = 0, len = keys.length; i < len; i++){
		var key = keys[i];
		if(datastore.hasOwnProperty(key)){
			fn.call(datastore, datastore[key], key);
		}
	}
};

Dictionary.prototype.showAll = function(){
	this.each(function(value, key){
		console.log(key + ' -> ' + value);
	});
};

Dictionary.prototype.count = function(){
	var n = 0;
	this.each(function(){ n++ });
	return n;
};

Dictionary.prototype.clear = function(){
	var datastore = this.datastore;
	this.each(function(value, key){
		delete datastore[key];
	});
};

module.exports = Dictionary;
