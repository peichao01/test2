(function (exports) {

	var Bone = exports.inherit({
		name: 'Bone',
		base: exports.Block,
		proto: {
			__constructor: function (opt) {
				this.__base(opt);
				this.dom.className = this.dom.className + ' bone';
				this.dom.innerText = '骨头';
			}
		}
	});

	exports.Bone = Bone;
	
})(GAME);