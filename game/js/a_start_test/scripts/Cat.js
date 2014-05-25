(function (exports) {

	var Cat = exports.inherit({
		name: 'Cat',
		base: exports.Block,
		proto: {
			__constructor: function (opt) {
				this.__base(opt);
				this.dom.className = this.dom.className + ' cat';
				this.dom.innerText = '猫';
			}
		}
	});

	exports.Cat = Cat;
	
})(GAME);