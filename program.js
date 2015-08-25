var http = require('http')
var full_res = ''

http.get(process.argv[2], function callback(response) {
	
	response.setEncoding('utf8')
	
	response.on('data', function(data) {
		full_res += data
	})

	response.on('end', function(){
		console.log(full_res.length)
		console.log(full_res)
	})
})
