var fs = require('fs')

var fileBuffer = fs.readFileSync(process.argv[2])
var str = fileBuffer.toString()

console.log(str.split('\n').length -1)