// {
//     let a = 10;
//     var b = 10;
// }
// try {
//     console.log(a);
//     console.log(b);
// } catch (err) {
//     console.log('err');
//     //console.log(err);
// }

// for(var i=0;i<10;i++){
//     //console.log(i);
// }
// console.log(i);
// for(var i=0;i<20;i++){

// }
// console.log(i);
// var i = 100;
// console.log(i);
// var i = 1000;
// console.log(i);

// console.log(foo);
// var foo = 2;

// console.log(bar);
// let bar = 2;

// const foo = {};
// foo.item1 = 1;
// foo.item2 = "2";
// foo.item3 = [3,3,3];
// console.log(foo);

// const foo = Object.freeze({});
// console.log(foo);

// function test(obj){
//     obj.item = "item";
//     console.log(obj);
// }

// test(foo);

// const foo2 = {};
// test(foo2);
// console.log(foo2);

// global.a = 1;
// console.log(global);

// var getGlobal = function () {
//     if (typeof self !== 'undefined') {
//         return self;
//     }
//     if (typeof window !== 'undefined') {
//         return window;
//     }
//     if (typeof global !== 'undefined') {
//         return global;
//     }
//     throw new Error('unable to locate global object');
// };

// console.log(getGlobal());

// function example(){
//     return [1,2,3];
// }

// let [a,b,c] = example();
// console.log(a);
// console.log(b);
// console.log(c);
// function example2(){
//     return {
//         foo:1,
//         bar:2
//     };
// }
// let {foo,bar}=example();
// console.log(example2());
// console.log(foo);
// console.log(bar);

// function f([x,y,z]){
//     console.log(x+y+z);
// }

// f(['a','b','c']);

// let jsonData = {
//     id:42,
//     status: "OK",
//     data:[333,332]
// };

// let {id,status,data:number} = jsonData;
// console.log(id,status,number);
// console.log(jsonData.id);
// console.log(jsonData.status);
// console.log(jsonData.data);

// const {SourceMapConsumer,SourceNode} = require('source-map');

// console.log("\u{41}\u{42}\u{43}")

// for(let codePoint of 'foo'){
//     console.log(codePoint);
// }

// function add(...values){
//     let sum = 0;
//     for(var val of values){
//         sum += val;
//     }
//     return sum;
// }

// console.log(add(1,2,3,4,5));

// var f = v=>v;
// console.log(f(200));

// let s1 = Symbol('foo');
// let s2 = Symbol(300);

// console.log(s1);
// console.log(s2);

// const s = new Set();
// [2,3,5,4,5,2,2].forEach(x=>s.add(x));

// for(let i of s){
//     console.log(i);
// }

// var person={
//     name:'zdf'
// }

// var handler = {
//     get:function(){
//         return 'crazy';
//     }
// }

// var proxy = new Proxy(person,handler);

// console.log(proxy.name);
// console.log(proxy.title);
// console.log(proxy.job);

// function timeout(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms,'done');
//     });
// }

// timeout(100).then((value)=>{
//     console.log(value);
// });

// console.log('end');



// console.log('end2');

// const promise = new Promise(function(resolve,reject){
//     try{
//         console.log('try');
//         resolve('resolve');
//         throw new Error('test');
//     }catch(e){
//         console.log('catch');
//         reject(e);
//     }
// });

// promise.then((data)=>{
//     console.log(data);
// }).catch(function(error){
//     console.log('reject');
//     console.log(error);
// }).finally(()=>{
//     console.log('finally');
// });

// function makeIterator(array){
//     var nextIndex = 0;
//     return {
//         next:function(){
//             return nextIndex<array.length?
//             {index:nextIndex,value:array[nextIndex++],done:false}:
//             {index:nextIndex,value:undefined,done:true};
//         }
//     };
// }

// var it = makeIterator(['a','b']);

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function* helloWorldGenerator(){
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }

// var hw = helloWorldGenerator();

// console.log(hw);

// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

// function* f(){
//     console.log('executed....');
// }

// function f2(){
//     console.log('executed2.....');
// }
// var generator = f();
// var generator2 = f2();


// setTimeout(function(){
//     generator.next()
// },2000);

// var readFile = require('fs-readfile-promise');

// console.log(readFile);



// readFile('example.js')
// .then(function (data) {
//   console.log(data.toString());
// })
// .then(function () {
//   return readFile('example.js');
// })
// .then(function (data) {
//   console.log(data.toString());
// })
// .catch(function (err) {
//   console.log(err);
// });

// readFile('example.js')
// .then(function (data) {
//   console.log(data.toString());
// })
// .then(function () {
//   console.log("step1");
// }).then(function(){
//     console.log("step2");
// });

// const fs = require('fs');

// const readFile2 = function (fileName) {
//     return new Promise(function (resolve, reject) {
//         fs.readFile(fileName, function (error, data) {
//             if (error) return reject(error);
//             resolve(data);
//         });
//     });
// };

// const gen = function* () {
//     const f1 = yield readFile2('example.js');
//     console.log('f1');
//     const f2 = yield readFile2('example.js');
//     console.log('f2');
//     console.log(f1.);
//     console.log(f2);
// };

// var gen1 = gen();
// console.log(gen1);
// gen1.next();
// gen1.next();
// gen1.next();

// async function test() {
//     const f1 = await readFile2('example.js');
//     const f2 = await readFile2('example.js');
//     console.log(f1.toString());
//     console.log(f2.toString());
// };

// test();

// function timeout(ms){
//     return new Promise((resolve)=>{
//         console.log(resolve);
//         setTimeout(resolve,ms);
//     });
// }

// async function asyncPrint(value,ms){
//     console.log('begin....');
//     await timeout(ms);
//     console.log('end....');
//     console.log(value);
// }

// asyncPrint('hello world',5000);

// function Point(x,y){
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.toString = function(){
//     return "("+this.x+","+this.y+")";
// };

// var p = new Point(1,2);
// console.log(p.toString());

// class Point{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }

//     toString(){
//         return "("+this.x+","+this.y+")";
//     }
// }

// var p = new Point(2,3);
// console.log(p.toString());

//var fs = require("fs");
// let { stat, exists, readFile } = require('fs');
import path from 'path';
import process from 'process';
