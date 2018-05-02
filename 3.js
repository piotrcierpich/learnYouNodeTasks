var fs = require('fs')
var pathToFile = process.argv[2]
var buffer = fs.readFileSync(pathToFile)
var fileAsString = buffer.toString()
var lines =  fileAsString.split('\n')
console.log(lines.length-1)
/*var ar = [1,2,3]
var count = 0
ar.reduce(function(a,b){
    count++
})
console.log(count)*/