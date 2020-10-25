module.exports  = class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides
    }

    info() {
        console.log("The name of the shape is", this.name)
        console.log("It has", this.sides, "sides")
    }
};