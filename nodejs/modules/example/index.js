const square = require('./square.js')
const shape = require('./shape.js')

console.log("Area of the square is" , square.square(5))
console.log("Perimter of the square is" , square.perimeter(5))

const myShape = new shape("Hexagon", 6)
myShape.info()