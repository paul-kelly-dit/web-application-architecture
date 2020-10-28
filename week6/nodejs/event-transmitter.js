const EventEmitter = require('events');

const myEmitter = new EventEmitter();

resetPassword = function (){
    console.log('Password has changed');
};

updateUIOnPasswordReset = function (){
    console.log('UI - Password successfully updated');
};

handleError = function (errorCode){
    console.log('Error handler');
    console.log('Problem processing : '+ errorCode);

};

myEmitter.on('PASSWORD_RESET', resetPassword);
myEmitter.on('PASSWORD_RESET', updateUIOnPasswordReset);
myEmitter.on('error', handleError);

myEmitter.emit('error', 9);