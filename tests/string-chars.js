/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('string.charAt()', function() {
	str.charAt(1);
}, function() {
	var str = '12345';
});

Meter.measure('string[index]', function() {
	str[1];
}, function() {
	var str = '12345';
});

Meter.measure('string.charCodeAt()', function() {
	str.charCodeAt(1);
}, function() {
	var str = '12345';
});