// node js
function List(){
	this.listSize = 0;
	this.pos = 0;
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
	this.moveTo = moveTo;
	this.inRange = inRange;
	this.getElement = getElement;

	this.resetFront = resetFront;
	this.resetEnd = resetEnd;
	// prev 到头的次数
	this._front = this.resetFront();
	// next 到底的次数
	this._end = this.resetEnd();
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
	this.resetFront().resetEnd();
}

function contains(element){
	return this.find(element) > -1 ? true : false;
}

function front(){
	this.pos = 0;
	this.resetFront().resetEnd();
}

function end(){
	this.pos = this.listSize - 1;
	this.resetFront().resetEnd();
}

function prev(){
	if(this.pos > 0) {
		--this.pos;
		this.resetFront().resetEnd();
	}
	else{
		this._front++;
	}
}

function next(){
	if(this.pos < this.listSize - 1) {
		++this.pos;
		this.resetFront().resetEnd();
	}
	else{
		this._end++;
	}
}

function currPos(){
	return this.pos;
}

function moveTo(position){
	this.pos = position;
	this.resetFront().resetEnd();
}

function inRange(){
	return this._front < 1 && this._end < 1  && this.pos > -1 && this.pos < this.listSize;
}

function getElement(){
	return this.dataStore[this.pos];
}

function resetFront(){
	this._front = 0;
	return this;
}

function resetEnd(){
	this._end = 0;
	return this;
}

module.exports = List;
