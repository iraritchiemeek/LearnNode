var fs = require('fs')
var content = undefined
var str = undefined

function readFile(callback) {
	fs.readFile(process.argv[2], function doneReading(err, fileContents) {
		content = fileContents
		str = content.toString()
		callback()
	})
}

function logLineNumber() {
	console.log(str.split('\n').length -1)	
}

readFile(logLineNumber)
