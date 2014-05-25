(function (exports) {

	var QueueItem = exports.inherit({
		name: 'QueueItem',
		proto: {
			__constructor: function (dom) {
				this.dom = dom;

				/*
				0  init
				1  down inside
				5  move inside
				6  move outside
				10 up inside
				11 up outside
				*/
				this.renewStatus();
			},
			renewStatus: function () {
				this.status = 0;
			},
			getStatus: function () {
				return this.status;
			},
			setStatus: function (status, e) {
				if(status != this.status){
					this.emit('change:status', status);
					this.status = status;
				}
				if(status < 6){
					var x = e.offsetX, y = e.offsetY;
					var dom = e.target;
					while(dom != this.dom){
						x += dom.offsetLeft;
						y += dom.offsetTop;
						dom = dom.offsetParent;
					}
					this.emit('move', {x: x, y: y});
				}
			}
		}
	});
	exports.EventEmitter.mixTo(QueueItem);

	var queue = [];
	var downInsideQueue = [];

	var move = {
		start: function () {
			document.documentElement.addEventListener('mousemove', this._listener);
		},
		stop: function () {
			document.documentElement.removeEventListener('mousemove', this._listener);
		},
		_listener: function (e) {
			// console.log(e);
			downInsideQueue.forEach(function (item) {
				if(item.dom.contains(e.target)){
					item.setStatus(5, e);
				}
				else{
					item.setStatus(6, e);
				}
			});
		}
	};

	document.documentElement.addEventListener('mouseup', function (e) {
		downInsideQueue.forEach(function (item) {
			if(item.dom.contains(e.target)){
				item.setStatus(10, e);
			}
			else{
				item.setStatus(11, e);
			}
			item.renewStatus();
		});
		downInsideQueue = [];
		move.stop();
	});

	document.documentElement.addEventListener('mousedown', function (e) {
		queue.forEach(function (item) {
			if(item.dom.contains(e.target)){
				item.setStatus(1, e);
				downInsideQueue.push(item);
			}
		});
		if(downInsideQueue.length) move.start();
	});

	exports.tap = {
		watch: function (dom) {
			var t = new QueueItem(dom);
			queue.push(t);
			return t;
		},
		unwatch: function (dom) {
			queue = queue.filter(function (item) {
				return item.dom != dom;
			});
		}
	};
	
})(GAME);