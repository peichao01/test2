(function (exports) {

	var Interval = exports.inherit({
		name: 'Interval',
		proto: {
			start: function(fn, interval) {
				var self = this;
				self.timeoutId = setTimeout(function timeoutFn() {
					fn();
					self.timeoutId = setTimeout(timeoutFn, interval);
				}, interval);
				return this;
			},
			clear: function() {
				clearTimeout(this.timeoutId);
			}
		}
	});

	var Timer = exports.inherit({
		name: "Timer",
		proto: {
			__constructor: function () {
				this.fps = 60;
				this.speed = 600; // 600ms/tick
				this.interval = new Interval;

				this.start();
			},
			start: function () {
				var now = this.now = new Date - 0;

				this.interval.start(function () {
					var n = new Date - 0;
					if(n - now >= this.speed){
						this.tick();
						now = n;
					}
					
				}.bind(this), 1000 / this.fps);
				return this;
			},
			pause: function () {
				this.interval.clear();
				return this;
			},
			tick: function () {
				this.emit('tick');
			},
			getSpeed: function () {
				return this.speed;
			},
			setSpeed: function (speed) {
				this.speed = speed;
				return this;
			}
		}
	});
	exports.EventEmitter.mixTo(Timer);

	exports.Timer = Timer;

})(GAME);