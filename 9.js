var http = require('http')

// SOLUTION 1 - no bl
var printIfAll = function () {
    if (url1completed && url2completed && url3completed) {
        console.log(data1)
        console.log(data2)
        console.log(data3)
    }
}

var makeRequest = function (url, setData, setCompleted) {
    http.get(url, function (response) {
        response
            .setEncoding('utf-8')
            .on('data', setData)
            .on('end', () => {
                setCompleted()
                printIfAll()
            })
    })
}

var data1 = ""
var data2 = ""
var data3 = ""
var url1completed = false
var url2completed = false
var url3completed = false

// makeRequest(process.argv[2], data => data1 += data, () => url1completed = true)
// makeRequest(process.argv[3], data => data2 += data, () => url2completed = true)
// makeRequest(process.argv[4], data => data3 += data, () => url3completed = true)


// SOLUTION 2 - npm install bl
var bl = require('bl')

var makeRequestBl = function (url, setData, setCompleted) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return
            }
            var result = data.toString()
            setData(result)
            setCompleted()
            printIfAll()
        }))
    })
}

// makeRequestBl(process.argv[2], data => data1 += data, () => url1completed = true)
// makeRequestBl(process.argv[3], data => data2 += data, () => url2completed = true)
// makeRequestBl(process.argv[4], data => data3 += data, () => url3completed = true)

//SOLUTION 3 - the reference solution
var results = []
var count = 0

function printResults() {
    for (var i = 0; i < results.length; i++) {
        console.log(results[i])
    }
}

function makeRequestRef(i) {
    http.get(process.argv[2 + i], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            results[i] = data.toString()
            count++
            if (count == 3) {
                printResults()
            }
        }))
    })
}

for (var i = 0; i < 3; i++) {
    makeRequestRef(i)
}