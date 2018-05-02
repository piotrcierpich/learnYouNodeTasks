module.exports = function (pathToDir, requiredExtension, callback) {
    var fs = require('fs')
    var path = require('path')

    requiredExtension = '.' + requiredExtension
    fs.readdir(pathToDir, function (err, files) {
        if (err) {
            callback(err, null)
            return
        }

        files.filter(function (file) {
            return path.extname(file) == requiredExtension;
        })
            .forEach(function (toPrint) {
                callback(null, toPrint);
            })
    })
}