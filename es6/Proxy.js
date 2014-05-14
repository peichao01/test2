var life = Proxy.create({
	get: function(obj, value){
		return value === 'ans' ? 42 : 'Meh! Nothing like : ' + value;
	}
});

console.log(life.ans);
console.log(life.lol);
