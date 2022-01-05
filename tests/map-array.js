/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('map', function() {
	var output = arr.map(m => m.id);
}, function() {
	var arr = [{ id: 1 }, { id : 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
});

Meter.measure('map with push', function() {
	var output = [];
	arr.forEach(item => {
		output.push(item.id);
	});
}, function() {
	var arr = [{ id: 1 }, { id : 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
});

Meter.measure('for', function() {
	var output = []
	for (var i = 0; i < arr.length; i++) {
		output.push(arr[i].id);
	}
}, function() {
	var arr = [{ id: 1 }, { id : 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
});
