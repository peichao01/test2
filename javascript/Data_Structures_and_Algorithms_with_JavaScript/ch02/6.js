function weekTemps(){
	this.dataStore = [];
	this.add = add;
	this.average = average;
}

function add(temp){
	this.dataStore.push(temp);
}

function average(){
	return this.dataStore.reduce(function(l, r){
		return l + r;
	}) / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average());
