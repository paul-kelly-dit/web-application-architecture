const EventEmitter = require('events');

const myEmitter = new EventEmitter();

let n = 0;
someFunction = function (){
    n++
    console.log(`Value of n is: ${n}`);
}

myEmitter.once('event', someFunction);

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');