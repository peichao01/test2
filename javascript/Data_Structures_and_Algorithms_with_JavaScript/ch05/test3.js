var Queue = require('./Queue');

function distribute(nums, queues, n, digit){
	for(var i = 0; i < n; i++){
		var num = nums[i];
		var index;
		if(digit == 1){
			index = num % 10;
			queues[index].enqueue(num);
		}
		else{
			index = Math.floor(num / 100);
			queues[index].enqueue(num);
		}
	}
}

function collect(queues, nums){
	var i = 0;
	for(var digit = 0; digit < 10; digit++){
		var queue = queues[digit];
		while(!queue.empty()){
			nums[i++] = queue.dequeue();
		}
	}
}

function dispArray(arr){
	//var putstr = '';
	//arr.forEach(function(el){
	//	putstr += el;
	//});
	//return putstr;
	var putstr = arr.join(' ');
	console.log(putstr);
	return putstr;
}

var queues = [];
for(var i = 0; i < 10; ++i){
	queues[i] = new Queue();
}

var nums = [];
for(var i = 0; i < 10; ++i){
	nums[i] = Math.floor(Math.floor(Math.random() * 1001));
}

console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
distribute(nums, queues, 10, 100);
collect(queues, nums);
console.log("After radix sort: ");
dispArray(nums);


