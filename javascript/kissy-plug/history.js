/*
@author peichao.pc@alibaba-inc.com

1. 只考虑Mobile端（现代浏览器）
2. 目前只考虑hashBang的情况，因为这个基本上满足需求，而且pushState这种需要后端对URL请求做处理，保证每个URL都能返回一些内容才行
*/
KISSY.add('history/m',function (S) {
	var WIN = window;

	var started = false;
	var config = {
		// hasPrefix: '!'
		hasPrefix: ''
	};

	var rhash = /^[^#]*(#.+)$/;

	function History(){
		this.stack = [];
		this.listeners = [];
	}

	History.prototype.start = function(options) {
		if(options) S.mix(config, options);
		if(!started){
			var that = this;
			started = true;
			var currHash = getHash();
			if(currHash){
				this.trigger(currHash);
			}
			WIN.addEventListener('hashchange', function onhashchange(e) {
				that.trigger(getHash(e.newURL));
			});
		}
		return this;
	};

	History.prototype.addListener = function(fn) {
		if(typeof fn === 'function'){
			this.listeners.push(fn);
		}
		return this;
	};

	History.prototype.trigger = function(newHash) {
		var prefix = '#' + config.hasPrefix, hash;
		if(newHash.indexOf(prefix) == 0){
			hash = newHash.substr(prefix.length);

			this.stack.push(hash);
			this.listeners.forEach(function (fn) {
				fn(hash);
			});
		}
		return this;
	};

	function getHash(url) {
		var matches = (url || location).toString().match(rhash);
		return matches ? matches[1] : '';
	}

	return new History();

}, {
	requires:[]
})