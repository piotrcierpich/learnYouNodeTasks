var argsArray = process.argv
var res = 0
for (var i = 2; i < argsArray.length; i++) {
    var num = Number(argsArray[i])
    res = res + num;
}
console.log(res)