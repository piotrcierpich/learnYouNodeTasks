var http = require('http')
http.get(process.argv[2], function (response) {
    response
        .setEncoding('utf-8')
        .on("data", console.log)
        .on('error', console.error)
}).on('error', console.error)