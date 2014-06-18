var json = {
	links: [
		{href: 'http://juicer.name', alt: 'Juicer'},
		{href: 'http://peichao01.com', alt: 'LongKui'},
		{href: 'http://ued.taobao.com', alt: 'Taobao UED'}
	]
};

var tpl = [
	'{@each links as item, index}',
		'${item|link}',
	'{@/each}'
].join('');

juicer.register('link', function(data){
	return '<a href="' + data.href + '" alt="' + data.alt + '">';
});

var tplHtml = juicer(tpl, json);

console.log(tplHtml);

console.log(juicer([
	'{@each i in range(5, 10)}',
		'${i};',
	'{@/each}'
].join(''),{}));