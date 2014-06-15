KISSY.add('router/m', function (S, history) {

	// function _tokenize(pathStr) {
	// 	var stack = [''];
	// 	for(var i = 0, len = pathStr.length; i < len; i++){
	// 		var chr = pathStr.charAt(i);
	// 		switch(chr){
	// 			case '(':
	// 			case ')':
	// 				stack.push(chr);
	// 			case '/':
	// 				stack.push('');
	// 				break;
	// 			default:
	// 				stack[stack.length - 1] += chr;
	// 		}
	// 	}
	// 	return stack.filter(function (str) {
	// 		return str.length !== 0;
	// 	});
	// }

	// function _parse (tokens) {
	// 	var smallAst = [];
	// 	var token;
	// 	while((token = tokens.shift()) !== void 0){
	// 		if (token.length <= 0) continue;
	// 		switch(token){
	// 			case '(':
	// 				smallAst.push(_parse(tokens));
	// 				break;
	// 			case ')':
	// 				return smallAst;
	// 			default:
	// 				smallAst.push(token);
	// 		}
	// 	}
	// 	return smallAst;
	// }

	// function parse (rule) {
	// 	var tokens = _tokenize(rule);
	// 	var ast = _parse(tokens);
	// 	return ast;
	// }
	
	function parseQuery(path) {
		var hashIndex = path.indexOf('#'), hash;
		if(hashIndex >= 0) {
			hash = path.substr(hashIndex);
			path = path.substr(0, hashIndex);
		}
		var questionIndex = path.indexOf('?'), search = {}, pathname = path;
		if(questionIndex >= 0){
			path.substr(questionIndex + 1).split('&').forEach(function (part) {
				if(part){
					part = part.split('=');
					search[part[0]] = part[1];
				}
			});
			pathname = path.substr(0, questionIndex);
		}
		
		return {
			pathname: pathname,
			search: search,
			hash: hash
		}
	}

	function Router () {
		this.routing = {};
	}

	Router.prototype.on = function(path, reg, fn) {
		if(!Array.isArray(reg)) {
			fn = reg;
			reg = [];
		}
		if(typeof path === 'string'){
			var patterns = path.split('/').filter(function (part) { return part !== '' });
			var len = patterns.length;
			this.routing[len] = this.routing[len] || [];
			this.routing[len].push({
				patterns: patterns,
				reg: reg,
				fn: fn
			});
		}
		// RegExp
		else{
			this.routing['reg'] = this.routing['reg'] || [];
			this.routing['reg'].push({
				reg: path,
				fn: fn
			});
		}

		return this;
	};

	Router.prototype.otherwise = function(fn) {
		this.otherwiseFn = fn;
		return this;
	};

	Router.prototype.navigate = function(url, triggerRoute) {
		triggerRoute = triggerRoute === void 0 ? true : triggerRoute;
		_triggerRoute = triggerRoute;
		location.hash = url;
		return this;
	};

	var _triggerRoute = true;
	var router = new Router;

	history.addListener(function(newHash) {
		if(!_triggerRoute) {
			// 从 hash 改变到得到回调函数，是一个异步的过程
			_triggerRoute = true;
			return;
		}

		var pathObj = parseQuery(newHash);
		var paths = pathObj.pathname.split('/').filter(function (p) {return p !== ''});
		var length = paths.length;
		var listeners = router.routing[length];
		var matched = [], regMatch;
		if (listeners) {
			outter:
			for(var i = 0, len = listeners.length; i < len; i++){
				var match = {args:[]},
					listener = listeners[i],
					patterns = listener.patterns, 
					regs = listener.reg;
				for(var ii = regIndex = 0, ll = paths.length; ii < ll; ii++){
					var path = paths[ii], pattern = patterns[ii], reg = regs && regs[regIndex];
					if(pattern.indexOf(':') === 0){
						regIndex++;
						if(reg && !path.match(reg)) continue outter;
						match.args.push(path);
					}
					else if(path === pattern){
						continue;
					}
					else{
						continue outter;
					}
				}
				match.fn = listener.fn;
				matched.push(match);
			}
		}
		if(router.routing.reg){
			router.routing.reg.forEach(function (rout) {
				var r = pathObj.pathname.match(rout.reg);
				if(r){
					regMatch = true;
					r.shift();
					rout.fn.apply(null, [pathObj].concat(r));
				}
			});
		}
		
		if(matched.length){
			matched.forEach(function(match){
				match.fn.apply(null, [pathObj].concat(match.args));
			});
		}
		else if(!regMatch){
			var result = router.otherwiseFn && (typeof router.otherwiseFn === 'function' ? router.otherwiseFn(pathObj) : router.otherwiseFn);
			if(result && result.redirectTo){
				router.navigate(result.redirectTo);
			}
		}
	});

	return router;

}, {
	requires: ['history/m']
})