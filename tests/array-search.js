/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('indexOf', function() {
	var includes = arr.indexOf(3) !== -1;
}, function() {
	var arr = [1,2,3,4,5];
});

Meter.measure('for', function() {
	var result = false;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 3)
			result = true;
	}
}, function() {
	var arr = [1,2,3,4,5];
});

Meter.measure('includes', function() {
	var result = arr.includes(3);
}, function() {
	var arr = [1,2,3,4,5];
});
