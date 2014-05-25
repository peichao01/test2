(function (exports) {

	var Road = exports.inherit({
		name: 'Road',
		base: exports.Block,
		proto: {
			__constructor: function (opt) {
				this.__base(opt);
				this.dom.className = this.dom.className + ' road';
				this.dom.innerText = '路';
			}
		}
	});

	exports.Road = Road;
	
})(GAME);