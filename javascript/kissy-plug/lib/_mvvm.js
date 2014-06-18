KISSY.add('mvvm', function (S) {
	var prefix = 'tm-';

	var DOC = document;
	var mvvmProto = MVVM.prototype;
	
	function MVVM () {
		var that = this;
		this.vmodels = {};
		S.ready(function () {
			that.scan(DOC.querySelectorAll('['+prefix+'controller],['+prefix+'important]'));
		});
	}
	mvvmProto.controller = function (id, factory) {
		var scope = {};
		factory(scope);
	};
	function modelFactory (scope) {
		var vmodel = {};
	}
	mvvmProto.scan = function(element, vmodel) {
		element = element || root;
		var vmodels = vmodels ? [].concat(vmodel) : [];
		scanTag(element, vmodels);
	};

	function scanTag(element, vmodels, node) {

	}

	function noop() {}

	var mvvm = new MVVM;
	return mvvm;

}, {
	requires: []
})