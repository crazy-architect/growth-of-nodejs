const buf1 = Buffer.alloc(10);

const buf2 = Buffer.from("hello buffer");

const buf3 = new Buffer("Hello World");

const buf4 = new Buffer("8b76de713ce","base64");

console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4);

var str2 = buf2.toString();
var str3 = buf3.toString();
console.log(str2);
console.log(str3);