(function (exports) {

	var util = {
		each: function (o, fn) {
			if(Array.isArray(o)) return o.forEach(fn);
			for(var key in o){
				fn(o[key], key, o);
			}
		},
		map:function (o, fn) {
			if(Array.isArray(o)) return o.map(fn);
			var r = {};
			this.each(o, function (item, key, o) {
				r[key] = fn(item, key, o);
			});
			return r;
		},
		filter: function (o, fn) {
			if(Array.isArray(o)) return o.filter(fn);
			var r = {};
			this.each(o, function (item, key, o) {
				if(fn(item, key, o)) r[key] = item;
			});
			return r;
		}
	};

	exports.util = util;
	
})(GAME);