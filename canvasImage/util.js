var D = deferred.Deferred, d = deferred.deferred;

function loadImage(src){
	return function () {
		var d = new D;
		var img = new Image();
		img.onload = function () {
			d.resolve(img);
		}
		img.src=src;
		return d;
	}
}