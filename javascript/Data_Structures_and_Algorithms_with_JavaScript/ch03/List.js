// node js
var posStart = 0;
var posEnd = function(size){ return size - 1 };
function List(){
	this.listSize = 0;
	this.pos = posStart;
	this.dataStore = [];
	this.append = append;
	this.find = find;
	this.remove = remove;
	this.length = length;
	this.toString = toString;
	this.insert = insert;
	this.clear = clear;
	this.contains = contains;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.currPos = currPos;
	this.realPos = realPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
}

function append(element){
	this.dataStore[this.listSize++] = element;
}

function find(element){
	for(var i = 0; i < this.dataStore.length; ++i){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}

function remove(element){
	var foundAt = this.find(element);
	if(foundAt > -1){
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

function length(){
	return this.listSize;
}

function toString(){
	return this.dataStore;
}

function insert(element, after){
	var insertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos + 1, 0, element);
		this.listSize++;
		return true;
	}
	return false;
}

function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = 0;
	this.front();
}

function contains(element){
	return this.find(element) > -1 ? true : false;
}

function front(){
	this.pos = posStart;
}

function end(){
	this.pos = posEnd(this.listSize);
}

function prev(){
	// 多减一个，pos可能为 -1
	if(this.pos >= 0) --this.pos;
}

function next(){
	// 多加一个，pos可能为length
	if(this.pos <= this.listSize - 1) ++this.pos;
}

function currPos(){
	//return this.pos;
	// 把超出的结果调整过来
	return this.pos < 0 ? 0 : this.pos >= this.listSize ? this.listSize - 1 : this.pos;
}

function realPos(){
	return this.pos;
}

function moveTo(position){
	this.pos = position;
}

function getElement(){
	return this.dataStore[this.currPos()];
}

module.exports = List;
