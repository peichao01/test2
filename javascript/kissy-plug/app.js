KISSY.use('mvvm', function (S, mvvm) {

	mvvm.controller('app', function (vm) {
		vm.views = [];
		vm.name = 'David';
	});
	
	// S.ready(function () {
	// 	console.log(mvvm);
	// });
	mvvm.scan();

});