var fs = require('fs')
var path = require('path')
// var ar = ["file.txt", "file2.txt", "file3.dat"]
// var filtered = ar.filter(function(val, i, arr){
//     console.log('val: ' + val)
//     console.log('i: ' + i)
//     console.log('arr: ' + arr)
//     if(val.endsWith(".txt"))
//         return val
// }).forEach(function(dir){
//     console.log(dir)
// })
var requiredExt = "." + process.argv[3]
fs.readdir(process.argv[2], function (err, dirs) {
    if (err) {
        console.log('error')
        return
    }
    dirs.filter(function (val, _, arr) {
        // if (val.endsWith(requiredExt))
        if (path.extname(val) == requiredExt)
            return val
    }).forEach(function (dir) {
        console.log(dir)
    })
})