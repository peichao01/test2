(function (exports) {

	// var fragment = document.createDocumentFragment();

	var domContainer = document.querySelector('#container');
	var config = exports.config;

	var Block = exports.inherit({
		name: "Block",
		proto: {
			/**
			* @argument row {Number}
			* @argument col {Number}
			// * @argument canActive {Boolean}
			*/
			__constructor: function (opt) {
				this.opt = opt = opt || {};
				this.dom = document.createElement('div');
				this.dom.className = 'block';
				this.isActive = false;
				this.getters = {};

				this.posTo(opt.row, opt.col);

				this.dom.addEventListener('click', this.onDomClick.bind(this));
			},
			get: function(key){
				return this.getters[key];
			},
			set: function(key, value){
				this.getters[key] = value;
				return this;
			},
			posTo: function (row, col) {
				this.row = row;
				this.col = col;
				if(row <= config.countRow) this.dom.style.top = (row * config.blockHeight) + 'px';
				if(col <= config.countCol) this.dom.style.left = (col * config.blockWidth) + 'px';
				return this;
			},
			appendTo: function (dom) {
				(dom || domContainer).appendChild(this.dom);
				return this;
			},
			findNext: function (prev) {
				if(this.sameSiblingCount <= 2){
					var next;
					if(this.upper && this.upper !== prev) next = this.upper;
					else if(this.right && this.right !== prev) next = this.right;
					else if(this.lower && this.lower !== prev) next = this.lower;
					else if(this.left && this.left !== prev) next = this.left;
					this.prev = prev;
					this.next = next;

					return this.next;
				}
			},
			toJSON: function () {
				return {
					row: this.row,
					col: this.col
				}
			},
			// active: function () {
			// 	this.isActive = true;
			// 	this.dom.innerText = this.dom.innerText + ' （激活）';
			// 	this.emit('active');
			// 	return this;
			// },
			// deactive: function () {
			// 	this.isActive = false;
			// 	var text = this.dom.innerText;
			// 	this.dom.innerText = text.substr(0, text.length - ('（激活）').length);
			// 	this.emit('deactive');
			// 	return this;
			// },
			onDomClick: function (e) {
				this.emit('click');
				// if(this.opt.canActive){
				// 	if(this.isActive) this.deactive();
				// 	else this.active();
				// }
			}
		}
	});
	exports.EventEmitter.mixTo(Block);

	exports.Block = Block;

})(GAME);