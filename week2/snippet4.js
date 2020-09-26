// Functions can return functions
let val = 8;
function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b;
        return ret;
    }

    return addNumbers;
}

let adder = createAdder();
let sum = adder(val, 8);
console.log('example of function returning a function: ', sum);