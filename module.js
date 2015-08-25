var fs = require('fs')
var path = require('path')

module.exports = function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      return file
  })
})