KISSY.add('mvvm', function (S) {
	var l = {};
	['info','warn','error','dir','time','log'].forEach(function (type) {
		l[type] = function (msg, cat, src) {
			if(cat === void 0) {
				msg = type + ': ' + msg;
				cat = type;
			}
			return S.log(msg, cat, src);
		}
	});
	
	var mproto = MVVM.prototype;
	function MVVM() {
		var that = this;
		that.scopes = {};
	}

	mproto.controller = function (id, factory) {
		if(this.scopes[id]){
			l.warn(id + ' 已经存在');
		}
		var scope = {};
		factory(scope);
		scope = descriptorFactory(scope);
	}
	function descriptorFactory(scope) {
		var realScope = {};
		S.each(scope, function (value, name) {
			realScope[name] = {
				get: '',
				set: '',
				enumerable: true,
				configurable: true
			}
		});
	}

	mproto.scan = function (elem) {
		
	}

	var mvvm = new MVVM();
	return mvvm;

},{
	requires: []
})