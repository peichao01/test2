// spider monkey js

function Set(){
	this.dataStore = [];
}

Set.prototype.contains = function(data){
	return this.dataStore.indexOf(data) > -1;
};

Set.prototype.add = function(data){
	if(this.dataStore.indexOf(data) < 0){
		this.dataStore.push(data);
		return true;
	}
	else{
		return false;
	}
};

Set.prototype.remove = function(data){
	var pos = this.dataStore.indexOf(data);
	if(pos > -1){
		this.dataStore.splice(pos, 1);
		return true;
	}
	else {
		return false;
	}
};

Set.prototype.size = function(){
	return this.dataStore.length;
};

Set.prototype.union = function(set){
	var tempSet = this.copy();
	set.dataStore.forEach(function(el){
		tempSet.add(el);
	});
	return tempSet;
};

Set.prototype.intersect = function(set){
	var tempSet = new Set();
	this.dataStore.forEach(function(el){
		if(set.contains(el)){
			tempSet.add(el);
		}
	});
	return tempSet;
};

Set.prototype.subset = function(set){
	if(this.size() > set.size()){
		return false;
	}
	else{
		for each(var member in this.dataStore){
			if(!set.contains(member)) return false;
		}
	}
	return true;
};

Set.prototype.difference = function(set){
	var tempSet = new Set();
	this.dataStore.forEach(function(el){
		if(!set.contains(el)) tempSet.add(el);
	});
	return tempSet;
};

Set.prototype.copy = function(){
	var set = new Set();
	this.dataStore.forEach(function(el){
		set.add(el);
	});
	return set;
};

Set.prototype.show = function(){
	return this.dataStore;
};
