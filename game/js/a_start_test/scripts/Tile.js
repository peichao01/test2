(function (exports) {

	var Tile = exports.inherit({
		name: 'Tile',
		base: exports.Block,
		proto: {
			__constructor: function (opt) {
				this.__base(opt);
				this.dom.className = this.dom.className + ' tile';
				this.dom.innerText = '砖';
			}
		}
	});

	exports.Tile = Tile;
	
})(GAME);