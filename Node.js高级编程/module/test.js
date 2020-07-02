const fs = require('fs');
const http = require('http');
var myModule2 = require('./module2');
var circle = require('./circle');

myModule2.printA();
myModule2.printB();

console.log(myModule2.pi);

var c1 = new circle.CircleType(1,2,3);
console.log(c1.area());