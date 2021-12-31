/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('setImmediate', function() {
	setImmediate(NEXT);
});

Meter.measure('setTimeout(1)', function() {
	setImmediate(NEXT, 1);
});

Meter.measure('nextTick', function() {
	process.nextTick(NEXT);
});

Meter.mode('verylow');