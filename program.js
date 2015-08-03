var fs = require('fs')
var content = undefined
var arr = []

function readFile(callback) {
	fs.readdir(process.argv[2], function doneReading(err, fileContents) {
		content = fileContents
		callback()
	})
}

function sortFiles() {
	for (var i = content.length - 1; i >= 0; i--) {
		if (content[i].indexOf(".md") !=-1) {
			arr.push(content[i])
		}
	};
	arr.sort()
}

function logSortedFiles() {
	sortFiles()
	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i])
	};
}

readFile(logSortedFiles)


// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })