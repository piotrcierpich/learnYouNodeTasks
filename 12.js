var http = require('http')
var map = require('through2-map')

http.createServer(function (request, response) {
    if(request.method != "POST"){
        res.end("Not a POST request")
    }

    request
        .pipe(map(chunk => chunk.toString().toUpperCase()))
        .pipe(response)
}).listen(process.argv[2])