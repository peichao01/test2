function* loadUI(){
	showLoadingScreen();
	yield loadUIDataAsynchronously();
	hideLoadingScreen();
}

function showLoadingScreen(){
	console.log('show loading screen');
}

function loadUIDataAsynchronously(){
	console.log('load ui data asynchronously -- start load');
	setTimeout(function(){
		console.log('load ui data asynchronously -- load success');
	}, 1000);
}

function hideLoadingScreen(){
	console.log('hide loading screen');
}

var loader = loadUI();

loader.next();

loader.next();

~function(){
	console.log('a1');
	setTimeout(function(){
		console.log('a2');
	}, 2000);
}();
