const EventEmitter = require('events');

const myEmitter = new EventEmitter();

handleError = function (errorCode) {
    // do something about the error
    console.error('Woah, there was an error! \nError code:', errorCode);
}

myEmitter.on('error', handleError);

myEmitter.emit('error', 9);