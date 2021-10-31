const EventEmitter = require("events");

const myEmitter = new EventEmitter();

handleOrder = function (food){
  console.log('Order for ' + food);
};

handleDoorbellRing = function (){
  console.log('RING RING');
};

handlePayment = function (food){
  console.log('Enjoy your ' + food);
};


myEmitter.on('order', handleOrder);
myEmitter.on('doorbell', handleDoorbellRing);
myEmitter.on('payment', handlePayment);

placeOrder = function (food) {
  myEmitter.emit("order", food);
  myEmitter.emit("doorbell");
  myEmitter.emit("payment", food);
};

placeOrder('curry')


