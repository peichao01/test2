function trait (konstructor, traits) {
	traits = [].slice.call(arguments, 1);
	function _trait(reciever, trait_, parentName){
		for(var methodName in trait_){
			if(reciever.hasOwnProperty(methodName)){
				var method = trait_[methodName];
				if((typeof method == 'function') && 
					(typeof reciever[methodName] == 'function') &&
					(method.toString().indexOf(parentName) > -1)) {
					var baseMethod = reciever[methodName];
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
	}
	function mixinTrait (reciever) {
		for(var i = 0, len = traits.length; i < len; i++){	
			_trait(reciever, traits[i], 'super');
		}
	}
	function Constructor(){
		konstructor.apply(this, arguments);
		mixinTrait(this);
	}
	for(var key in konstructor.prototype){
		if(konstructor.prototype.hasOwnProperty(key)) Constructor.prototype[key] = konstructor.prototype[key];
	}
	mixinTrait(Constructor.prototype);
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
function BasicIntQueue2(name){
	this.name = name;
	this._buf = [];

	this.get = function(){
		return this._buf.shift();
	};

	this.put = function(x){
		this._buf.push(x);
	};
}

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

var Klass = trait(BasicIntQueue2, trait_Doubling, trait_Incrementing, trait_Filtering);
var queue = new Klass('Klass');
var queue1 = new BasicIntQueue('BasicIntQueue');

queue1.put(-1);

queue.put(-1);
queue.put(0);
queue.put(1);

console.log(queue.get()); // 2
console.log(queue.get()); // 4
console.log(queue.get()); // undefined