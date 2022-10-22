var car = new Object();
car.manufacturer = "BMW";
car.type = "X5";
console.log(car);

// json ex 2
var car2 = new Object();
car2.manufacturer = "BMW";
car2.type = "X5";
var carJson = JSON.stringify(car2, null, "  ");

console.log(carJson);

var car3 = new Object();
car2.manufacturer = "BMW";
car2.type = "X5";
var carJson = JSON.stringify(car2, null, "  ");
let parsedCar = JSON.parse(carJson);
console.log(parsedCar)