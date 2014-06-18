~function (avalon) {
	
	avalon.ui['widget'] = function (element, data, vmodels) {
		var innerHTML = element.innerHTML;
		avalon.clearHTML(element);
		var model = avalon.define(data.widgetId, function (vm) {
			avalon.mix(vm, data.options);
			vm.value = 0;
			vm.plus = function (e) {
				model.value++;
			}
		});
		avalon.nextTick(function () {
			element.innerHTML = innerHTML;
			avalon.scan(element, [model].concat(vmodels));
		});
		return model;
	}

	avalon.ui['widget'].defaults = {
		aaa: 'aaa',
		bbb: 'bbb',
		ccc: 'ccc'
	}

}(avalon)