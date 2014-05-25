(function (exports) {

	exports.config.timerNormal = new exports.Timer;
	exports.config.timerProcess = new exports.Timer;

	var Map = exports.Map;
	var Tile = exports.Tile;
	var Cat = exports.Cat;
	var Bone = exports.Bone;
	var Road = exports.Road;

	var domPannel = document.querySelector('#pannel');
	var domContainer = document.querySelector('#container');
	var domOp = document.querySelector('#op');
	var domOpTar = document.querySelector('#op-tar');
	var domStart = document.querySelector('#start');

	var pannelManager = {
		cat: new Cat({canActive: true}),
		bone: new Bone({canActive: true}),
		tile: new Tile({canActive: true}),
		road: new Road({canActive: true})
	};
	var each = function (o, fn) {for(var key in o) fn(o[key], key, o);}
	// var activeItem;
	each(pannelManager, function (item, key) {
		item.appendTo(domPannel);
		item.on('click', function () {
			// activeItem = key;
			domOpTar.innerText = key;
		});
	});

	var mapTap = exports.tap.watch(domContainer);
	// mapTap.on('change:status', function (status) {
	// 	if(status == 1){
	// 		console.log('down inside');
	// 	}
	// 	else if(status == 5){
	// 		console.log('move inside');
	// 	}
	// 	else if(status == 6){
	// 		console.log('move outside');
	// 	}
	// 	else if(status == 10){
	// 		console.log('up inside');
	// 	}
	// 	else if(status == 11){
	// 		console.log('up outside');
	// 	}
	// });
	mapTap.on('move', function (e) {
		var activeItem = domOpTar.innerText;
		if(domOp.value == 0 || !activeItem) return;

		var x = e.x, y = e.y, config = exports.config;
		// console.log('x: ' + x + ', y: ' + y);
		var row = Math.floor(y / config.blockWidth),
			col = Math.floor(x / config.blockHeight);
		var Klass = activeItem == 'tile' ? Tile : 
					activeItem == 'bone' ? Bone : 
					activeItem == 'cat' ? Cat : 
					activeItem == 'road' ? Road : 
					undefined;

		if(domOp.value == 1 && !Map.getBlock(row, col) && Klass){
			var block = new Klass({row: row, col: col});
			Map.add(block);
		}
		else if(domOp.value == 2){
			Map.del(row, col, Klass);
		}
	});

	domStart.addEventListener('click', function (e) {
		var cat = Map.getDataByType('Cat')[0];
		if(cat){

		}
		else{
			alert('你还没有添加喵呢!')
		}
	});
	
})(GAME);