// 还差：
// 1. 计算擦除的部分所占的百分比
// 2. clearCircle x1、y1点的计算有问题，右边框附近会有问题
// 3. mousemove 时不要一直在绘制，可以在一个间隔时间之后再去绘制， 同时，不是绘制点， 而是把两次点之间的线段给擦除掉
window.addEventListener('DOMContentLoaded', onDomContentLoaded)

var theCanvas, context;
var radius = 40;//px
var blurDis = 20;
var realRadius = radius - blurDis;

function onDomContentLoaded (e) {
	canvasApp();
}
function canvasApp () {
	theCanvas = document.getElementById('canvas');
	context = theCanvas.getContext('2d');

	theCanvas.addEventListener('mousedown', onCanvasMousedown);

	// drawScreen();
	drawScreen2();
}
function drawScreen () {
	context.fillStyle = '#aaa';
	context.fillRect(0,0,200,200);
	context.fillStyle = '#000';
	context.font = '20px _sans';
	context.textBaseline = 'top';
	context.fillText('Canvas!', 0, 0);
}
function drawScreen2 () {
	var _ = d();
	_.verbose = true;
	_.then(loadImage('./pic1.jpg'))
	.then(function (img) {
		context.drawImage(img, 0, 0);
		// context.drawImage(img, 50, 50, 40, 40);

		var imagedata = context.getImageData(200, 200, 50, 50);
		for(var i = 2, len = imagedata.data.length; i<len; i+=4){
			imagedata.data[i] = 0;
		}

		context.putImageData(imagedata, 200, 200);
	})
	.resolve();
}

function onCanvasMousedown (e) {
	
	theCanvas.addEventListener('mousemove', onCanvasMousemove);
	theCanvas.addEventListener('mouseup', onCanvasMouseup);

	clearCircle(e);
}
function onCanvasMousemove (e) {
	clearCircle(e);
}
function onCanvasMouseup (e) {
	theCanvas.removeEventListener('mousemove', onCanvasMousemove);
	theCanvas.removeEventListener('mouseup', onCanvasMouseup);

	// clearCircle(e);
}

function clearCircle (e) {
	if(!context) return;

	var x = e.offsetX, y = e.offsetY;
	var t=y-radius,top = t < 0 ? 0 : t, l=x-radius,left = l < 0 ? 0 : l;
	var w=radius*2, width = (left+w)>theCanvas.width?(theCanvas.width-left):w;
	var h=radius*2, height = (top+h)>theCanvas.height?(theCanvas.height-top):h;

	var imagedata = context.getImageData(left, top, width, height);
	for(var i = 3,x1=0,y1=0, len = imagedata.data.length; i<len; i+=4){
		if(x1 !== 0 && x1%(radius*2) == 0){
			x1 = 0;
			y1++;
		}
		x1++;
		if(imagedata.data[i] === 0) continue;
		// console.log('x1: '+x1 +', y1: ' +y1);
		var b1 = Math.abs(radius - x1), b2 = Math.abs(radius - y1);
		var b3 = Math.sqrt(b1*b1+b2*b2);
		if(b3 <= realRadius){
			imagedata.data[i] = 0;
		}
		else if(b3 <= realRadius+blurDis){
			var more = b3 - realRadius;

			var preAlpha = imagedata.data[i];
			var nowAlpha = more/blurDis*255;
			imagedata.data[i] = nowAlpha < preAlpha ? nowAlpha : preAlpha;
			// console.log(more, more/blurDis*255);
		}
	}
	context.putImageData(imagedata, left, top);
}