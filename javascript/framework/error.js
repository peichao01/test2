try{
	a.b.c();
}
catch(e){
	console.dir(e);

	console.log(e.fileName || e.stack);
}