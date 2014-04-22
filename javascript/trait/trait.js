function trait (konstructor, traits) {
	function Constructor(){
		konstructor.apply(this, arguments);
	}
	function _trait(reciever, __trait, parentName){
		for(var methodName in __trait){
			var method = __trait[methodName];
			if(typeof method == 'function' && method.toString().indexOf(parentName) > -1) {
				if (typeof reciever[methodName] !== 'function') throw new TypeError("reciever method("+methodName+") is not a function.");
				var baseMethod = reciever[methodName] || function(){};
				reciever[methodName] = function(){
					var baseSaved = this[parentName];
					this[parentName] = baseMethod;
					var result = method.apply(this, arguments);
					this[parentName] = baseSaved;
					return result;
				};
			}
			else {
				reciever[methodName] = method;
			}
		}
	}
	for(var key in konstructor.prototype){
		Constructor.prototype[key] = konstructor.prototype[key];
	}
	for(var i = 1, len = arguments.length; i < len; i++){	
		_trait(Constructor.prototype, arguments[i], 'super');
	}
	return Constructor;
}

function BasicIntQueue(name){
	this.name = name;
	this._buf = [];
}
BasicIntQueue.prototype.get = function(){
	return this._buf.shift();
};
BasicIntQueue.prototype.put = function(x){
	this._buf.push(x);
};

var trait_Doubling = {
	put: function(x){
		this.super(2 * x);
	}
};
var trait_Incrementing = {
	put: function(x){
		this.super(x + 1);
	}
};
var trait_Filtering = {
	put: function(x){
		if(x >= 0) this.super(x);
	}
};

var Klass = trait(BasicIntQueue, trait_Doubling, trait_Incrementing, trait_Filtering);
var queue = new Klass('Klass');
var queue1 = new BasicIntQueue('BasicIntQueue');

queue1.put(-1);

queue.put(-1);
queue.put(0);
queue.put(1);

console.log(queue.get());
console.log(queue.get());
console.log(queue.get());