function PCImage(src, cb){
	this.src = src;
	this.cb = cb;
	this.image = new Image();
	this.image.onload = this.onload.bind(this);
	this.image.src = this.src;
}
PCImage.prototype.onload = function(e) {
	this.cb(this.image);
};