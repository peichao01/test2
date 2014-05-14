var Node = require('./Node');

function LList(){
	this.head = new Node('head');
}

LList.prototype.find = function(item){
	var currNode = this.head;
	while(currNode.element != item){
		if(currNode.next) currNode = currNode.next;
		else break;
	}
	return currNode;
};

LList.prototype.findPrevious = function(item){
	var currNode = this.head;
	while(currNode && currNode.next){
		if(currNode.next.element == item) break;
		currNode = currNode.next;
	}
	//if(currNode == this.head) return null;
	return currNode;
};

LList.prototype.findPrevious2 = function(item){
	var currNode = this.head;
	while(!(currNode.next == null) && (currNode.next.element != item)){
		currNode = currNode.next;
	}
	return currNode;
};

LList.prototype.insert = function(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
};

LList.prototype.remove = function(item){
	var prevNode = this.findPrevious2(item);
	if(prevNode.next != null){
		prevNode.next = prevNode.next.next;
	}
};

LList.prototype.display = function(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
};

module.exports = LList;
