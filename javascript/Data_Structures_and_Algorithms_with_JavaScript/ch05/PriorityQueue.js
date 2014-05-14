var Queue = require('./Queue');

Queue.prototype.dequeue = function(){
	var priority = this.front().code;
	var index = this._front;
	this.each(function(patient, j, arr, i){
		if(patient.code < priority) {
			priority = patient.code;
			index = i;
		}
	});
	return this.dataStore.splice(index, 1);
}

module.exports = Queue;
