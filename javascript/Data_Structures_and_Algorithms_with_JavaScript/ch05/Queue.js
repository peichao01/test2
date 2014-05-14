function Queue(){
	this.dataStore = [];
	this._front = 0;
	this._bufferSize = 50;
}

Queue.prototype.enqueue = function(element){
	this.dataStore.push(element);
};
// 如果每次都 shift，后面的元素要往前排，消耗大
// 可以等到一个间隔之后，再统一往前移动一步
Queue.prototype.dequeue = function(){
	//return this.dataStore.shift();
	if(this._front >= this._bufferSize - 1){
		this._front = 0;
		this.dataStore.splice(0, this._bufferSize);
	}
	else{
		return this.dataStore[this._front++];
	}
};
Queue.prototype.front = function(){
	//return this.dataStore[0];
	return this.dataStore[this._front];
};
Queue.prototype.back = function(){
	return this.dataStore[this.dataStore.length - 1];
};
Queue.prototype.each = function(fn){
	var j = 0;
	for(var i = this._front, len = this.dataStore.length; i < len; i++){
		fn(this.dataStore[i], j++, this.dataStore, i);
	}
};
Queue.prototype.toString = function(){
	var front = this._front;
	return this.dataStore.filter(function(el,i){
		return i >= front;
	}).join('\n');
};
Queue.prototype.empty = function(){
	return this.dataStore.length <= this._front;
};

Queue.prototype.count = function(){
	return this.dataStore.length - this._front;
};

module.exports = Queue;
