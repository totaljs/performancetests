/* eslint-disable */

const Meter = require('performancemeter');

Meter.measure('Function args: inline', function() {
	fn(obj.name, obj.age);
}, function() {
	var obj = {};
	obj.name = 'Peter';
	obj.age = 33;
	function fn(name, age) {};
});

Meter.measure('Function args: reference', function() {
	var obj = {};
	obj.name = 'Peter';
	obj.age = 33;
	fn(obj);
}, function() {
	function fn(obj) {};
});