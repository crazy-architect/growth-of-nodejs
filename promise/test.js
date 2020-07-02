var fs = require('fs');
 
var readFile = function(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

var inst = new readFile('test.txt');

function resolve(data){
    console.log(data);
}

function reject(data){
    console.log(data);
}
inst.then(resolve).catch(reject);