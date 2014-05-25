// Map 来作为管理者
(function (exports) {

	var util = exports.util;

	var Map = exports.inherit({
		name: "Map",
		proto: {
			__constructor: function (opt) {
				this.opt = opt || {};
				this.config = opt.config;
				this.data = [];
				this.dataByClass = {};
				this.dom = document.querySelector('#container');
				for(var i = 0; i < this.config.countRow; i++){
					var row = this.data[i] = new Array(this.config.countCol);
					// for(var j = 0; j < this.config.countCol; j++){
					// 	row[j] = 
					// }
				}
			},
			getBlock: function (row, col) {
				return this.data[row] && this.data[row][col];
			},
			getDataByType: function(type){
				var d = this.dataByClass[type] = this.dataByClass[type] || [];
				return d;
			},
			_getSortedDataByType: function (type) {
				var d = this.getDataByType(type);
				var Klass = exports[type];
				util.each(d, function (item, i) {
					item.sameSiblingCount = 0;
					item.upper = this.getBlock(item.row - 1, item.col);
					item.right = this.getBlock(item.row, item.col + 1);
					item.lower = this.getBlock(item.row + 1, item.col);
					item.left = this.getBlock(item.row, item.col - 1);
					if(item.upper instanceof Klass) {
						item.isUpperSameKind = true;
						item.sameSiblingCount++;
					}
					if(item.right instanceof Klass) {
						item.isRightSameKind = true;
						item.sameSiblingCount++;
					}
					if(item.lower instanceof Klass) {
						item.isLowerSameKind = true;
						item.sameSiblingCount++;
					}
					if(item.left instanceof Klass) {
						item.isLeftSameKind = true;
						item.sameSiblingCount++;
					}
					if(item.sameSiblingCount > 2) throw('item['+item.row+','+item.col+'] has more than two siblings of the same kind.');
				}.bind(this));
				var oneSiblingItems = util.filter(d, function (item) {
					return item.sameSiblingCount == 1;
				});
				if(oneSiblingItems.length > 2) throw('more then 2 block in the edge.');
				var headItem = oneSiblingItems[0].row + oneSiblingItems[0].col < oneSiblingItems[1].row + oneSiblingItems[1].col ? oneSiblingItems[0] : oneSiblingItems[1];
				var prev = headItem;
				var next = prev.findNext();
				var tmp;
				var arr = [prev, next];
				while(next){
					tmp = next;
					next = next.findNext(prev);
					prev = tmp;
					if(next) arr.push(next);
				}
				return arr;
			},
			getSortedRoad: function () {
				return this._getSortedDataByType('Road');
			},
			add: function (block) {
				var KlassName = block.constructor.name;
				var d = this.getDataByType(KlassName);

				// d.push(block.set('indexInMapByClass', d.length));
				d.push(block);
				this.data[block.row][block.col] = block;
				this.dom.appendChild(block.dom);
				return this;
			},
			del: function (row, col, Klass) {
				var block = this.getBlock(row, col),
					KlassName;
				if(block && block instanceof Klass && (KlassName = block.constructor.name)){
					this.data[row][col] = null;
					var d = this.getDataByType(KlassName);
					// d.splice(block.get('indexInMapByClass'), 1);
					var index = d.indexOf(block);
					if(index >= 0) d.splice(index, 1);
					block.dom.remove();
				}
				return block;
			},
			toJSON: function () {
				return util.map(this.dataByClass, function (item, key) {
					return item.map(function (item) {
						return item.toJSON();
					});
				});
			}
		}
	});

	exports.Map = new Map({config: exports.config});
	
})(GAME);