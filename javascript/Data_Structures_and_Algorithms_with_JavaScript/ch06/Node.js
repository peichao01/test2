function Node(element){
	this.element = element;
	this.next = null;
}

Node.prototype.toString = function(){
	return this.element.toString();
};

module.exports = Node;
