function Node(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}

function DLList(){
	this.head = new Node('head');
	
}

DLList.prototype.insert = function(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = this.find(item);
	newNode.previous = current;
	current.next = newNode;
}
