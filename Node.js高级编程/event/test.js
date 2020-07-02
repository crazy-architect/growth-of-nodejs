const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occured!');
});
myEmitter.emit('event');
myEmitter.on('event2', (a) => {
    setImmediate(() => {
        console.log('this happens asynchronously');
        a.result = "result";
        console.log("a=",a);
    });
    console.log('event2');

})
var a = {};
myEmitter.emit('event2',a);
console.log("a=",a);