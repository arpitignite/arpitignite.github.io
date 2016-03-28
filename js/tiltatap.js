
( function($) {

	var stats = {
		alpha: $('#stats .alpha'),
		beta: $('#stats .beta'),
		gamma: $('#stats .gamma'),
		hand: $('#stats .hand')
	};

	window.ondeviceorientation = function(event) {

		stats.alpha.html(event.alpha);
		stats.beta.html(event.beta);
		stats.gamma.html(event.gamma);

		if (event.gamma >= 0) {
			stats.hand.html('Left');
		} else {
			stats.hand.html('Right');
		}
	}

})(jQuery);