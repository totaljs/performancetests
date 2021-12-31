const Fs = require('fs');
const Path = require('path');
const Exec = require('child_process').execFile;

Fs.readdir('tests', function(err, files) {

	console.time('Duration');

	var run = function() {

		var file = files.shift();
		if (!file) {
			console.timeEnd('Duration');
			console.log('');
			process.exit(0);
			return;
		}

		var filename = Path.join('tests', file);

		Exec('node', [filename, '--multiple'], function(err, response) {
			if (err) {
				console.error(err);
				process.exit(1);
			} else {
				console.log(response);
				run();
			}
		});
	};

	run();

});