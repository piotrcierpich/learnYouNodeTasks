var http = require('http')

// plain request solution
// http.get(process.argv[2], function (response) {
//     var responseAsString = "";
//     response
//         .setEncoding('utf-8')
//         .on('data', function (data) {
//             responseAsString += data
//         })
//         .on('end', function () {
//             console.log(responseAsString.length)
//             console.log(responseAsString)
//         })
// }).on('error', console.error)

// npm install bl
var bl = require('bl')
http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            console.error(err)
            return
        }
        var dataAsString = data.toString()
        console.log(dataAsString.length)
        console.log(dataAsString)
    }))
})