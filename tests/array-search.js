/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('indexOf', function() {
	arr.indexOf(3) !== -1;
}, function() {
	var arr = [1,2,3,4,5];
});

Meter.measure('for', function() {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 3)
			break;
	}
}, function() {
	var arr = [1,2,3,4,5];
});

Meter.measure('includes', function() {
	arr.includes(3);
}, function() {
	var arr = [1,2,3,4,5];
});
