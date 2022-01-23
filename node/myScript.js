

function myFunction()
{
    document.getElementById("demo").innerHTML="我的第一个 JavaScript 函数";
    // 异步读取
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取: " + data.toString());
    });
}