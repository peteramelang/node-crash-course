const fs = require('fs');
const path = require('path');

// Create folder (if it doesn't exist)
/*
fs.access(path.join(__dirname, 'fs-folder-test'), (err) => {
	if (err) {
		console.log('Directory does not exist.');

		fs.mkdir(path.join(__dirname, 'fs-folder-test'), {}, (err) => {
			if (err) throw err;
			console.log('Directory created');
		});
	} else {
		console.log('Directory already exists. Skipping...');
	}
});
*/

// Create and write to file
/*
fs.writeFile(
	path.join(__dirname, 'fs-folder-test', 'fs-file-test.txt'),
	'Hello World! :)',
	(err) => {
		if (err) throw err;
		console.log('File created');

		// Append to file
		fs.appendFile(
			path.join(__dirname, 'fs-folder-test', 'fs-file-test.txt'),
			' I love Node.js',
			(err) => {
				if (err) throw err;
				console.log('File edited');
			}
		);
	}
);
*/

// Read file
/*
fs.readFile(
	path.join(__dirname, 'fs-folder-test', 'fs-file-test.txt'),
	'utf8',
	(err, data) => {
		if (err) throw err;
		console.log(data);
	}
);
*/

// Rename file
fs.rename(
	path.join(__dirname, 'fs-folder-test', 'fs-file-test.txt'),
	path.join(__dirname, 'fs-folder-test', 'fs-file-test-new.txt'),
	(err) => {
		if (err) throw err;
		console.log('File renamed');
	}
);
