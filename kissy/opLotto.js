KISSY.add(function(S, Node, Event, Anim, IO) {
	var $ = Node.all;
	var opLotto = {
		init: function () {
			console.log("kissy custom module say Hello!");
		}
	};
	return opLotto;
}, {requires: ['node', 'event', 'anim', 'ajax']});