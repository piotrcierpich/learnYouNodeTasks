var http = require('http')
var url = require('url')

http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true)
    var date = new Date(parsedUrl.query.iso)
    var responseContent = ""

    if (parsedUrl.pathname === "/api/parsetime") {
        responseContent = JSON.stringify(
            {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            }
        )
    }
    else if (parsedUrl.pathname === "/api/unixtime") {
        responseContent = JSON.stringify(
            {
                "unixtime": date.getTime()
            }
        )
    }
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(responseContent)
}).listen(process.argv[2])