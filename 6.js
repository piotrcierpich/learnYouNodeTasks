var listFiles = require('./6a')
listFiles(process.argv[2], process.argv[3], function (err, file) {
    if (err) {
        console.log('error ' + err)
        return
    }
    console.log(file)
})