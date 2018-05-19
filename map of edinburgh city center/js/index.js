var mapmask = (function() {

	var settings = {
		'offset': { 'left': 50, 'top': 50 },
		'frame': { 'width': 600, 'height': 600 },
		'current': { 'x': 0, 'y': 0 },
		'map': { 'width': 1000, 'height': 600 }
	};

	var $map = $('.map');
	var $mask = $('.mask');

	function moveMap(coords) {
		var x = coords.x;
		var y = coords.y;
		var frame = (x + settings.offset.left) + 'px ' + (y + settings.offset.top) + 'px';
		// $map.css({ 'left': x, 'top': y });
		$map.css({ '-webkit-transform': 'translate3d(' + x + 'px, ' + y + 'px, 0)' });
		$map.css({ 'transform': 'translate3d(' + x + 'px, ' + y + 'px, 0)' });
		$mask.css({ '-webkit-mask-position': frame });
	}

	// add transitions to .mask and .map
	// having them on sooner was causing weird bg image zooming on load
	$('body').addClass('ready');

	var mapinterval = setInterval(function() {
		moveMap({
			// x range is -1000 to 600
			'x': Math.round(Math.random() * (settings.map.width + settings.frame.width) * 0.75) - settings.map.width * 0.75,
			// y range is -600 to 600
			'y': Math.round(Math.random() * (settings.map.height + settings.frame.height) * 0.75) - settings.map.height * 0.75
		});
	}, 10 * 1000);

	moveMap({'x': -400, 'y': -300});

})();