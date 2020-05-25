const ffi = require("ffi-napi");
const ref = require("ref-napi");

/* const vdb_api = new ffi.Library("./vdbwrapper.dll", {
	"add": [
		"int", ["int", "int"]
	],
	"join": [
		"string", ["string", "string"]
	],
	"fetch": [
		"string", ["string","string"]
	],
	"fetch2":[
		"string",["string"]
	]
}); */

const vdb_api = new ffi.Library("./vdbwrapper.dll", {
	'fetch': [
		'string',['string','int']
	],
	"add": [
		"int", ["int", "int"]
	]
});


var a = "1234";
var b = "efgh";
console.log("##### ffi-test #####");
console.log(vdb_api.add(15, 5)); 
/* console.log(">>>>join<<<<");
console.log(vdb_api.join("123", "abc")); */
console.log(">>>>fetch<<<<");
c = vdb_api.fetch(a,100);
console.log(a);
console.log(c);
//console.log("fetch2");
//console.log(vdb_api.fetch2(a));