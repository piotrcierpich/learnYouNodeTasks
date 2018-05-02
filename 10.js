var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

var server = net.createServer(function (socket) {
    var date = new Date()
    var dateAsString = date.getFullYear() + "-" + zeroFill(date.getUTCMonth() + 1) + "-" + zeroFill(date.getDate()) + " " + date.getHours() + ":" + date.getMinutes() + "\n"
    console.log(dateAsString);

    // can be simplified to socket.end('response string')
    // socket.write(dateAsString)
    // socket.end()
    socket.end(dateAsString)
}).listen(process.argv[2])