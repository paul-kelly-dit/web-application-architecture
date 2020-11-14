
// imperative code
const arrayContainsAnotherArray = (needle, haystack) => {
    for (let i=0; i < needle.length; i++) {
        if (haystack.indexOf(needle[i]) === -1)
            return false;
    }
    return true;
};
console.log(arrayContainsAnotherArray(["is"], ["is", "haystack", "in", "words", "lots", "the"]));

// Problems with mutation

// With shared state, the order in which function calls are made
// changes the result of the function calls.
const x = {
    val: 2
};

const x1 = () => x.val += 1;
const x2 = () => x.val *= 2;

x1();
x2();
// or
// x1();
// x2();
// x1();
// x2();
// x2();
// x2();

console.log(x.val);


// SAFER WAY



/*

When you avoid shared state, the timing and order of function calls don’t change the result
of calling the function. With pure functions, given the same input, you’ll always
get the same output.

A change in one function, or the timing of a function call won’t ripple out and break other parts of the program.

 */
const x = {
    val: 2
};

/*

We use Object.assign() and pass in an empty object as the first parameter to copy the properties of x
instead of mutating it in place.
In this case, it would have been equivalent to simply create a new
object from scratch, without Object.assign(), but this is a common pattern in JavaScript to create copies
of existing state instead of using mutations

 */
const x1 = x => Object.assign({}, x, { val: x.val + 1});

const x2 = x => Object.assign({}, x, { val: x.val * 2});

console.log(x1(x2(x)).val); // 5


const y = {
    val: 2
};

// Since there are no dependencies on outside variables,
// we don't need different functions to operate on different
// variables.

// Because the functions don't mutate, you can call these
// functions as many times as you want, in any order,
// without changing the result of other function calls.

x1(y);
x1(y);
x2(y);
x1(y);
x2(y);
x1(y);
x2(y);
x1(y);

// Function composition at play
console.log(x1(x2(y)).val); // 5 - we always get 5 when called in this order

/////////////////////////////////////////////////////////






// Is this a function with side effects?
function performCalculation(y) {
    let a = y * 10;
    calculated = true;
}

// What about this?
function performCalculation(y) {
    return y * 10;
}

// Map example
const toInt = (str) => {
    return parseInt(str);
};
['123', '456', '789'].map(toInt);

// Map example chain
const divideByTen = (num) => {
    return num / 10;
};

['123', '456', '789'].map(toInt).map(divideByTen);

// Flatmap example

// type this in console
Array.from({length:3}).fill(1)

// ok now we automate
const echo = n => x => Array.from({length:n}).fill(x);

//[[1,1,1],[2,2,2],[3,3,3]]
console.log([1, 2, 3].map( echo(3) ));

// whats wrong with this?
console.log([1, 2, 3].flatMap( echo(3) ));

// Reduce example

const addValuesFn = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log([1, 2, 3, 4].reduce(addValuesFn));

// Filter example

let books = [{
    "id": 111,
    "title": "C# 6.0",
    "author": "ANDREW TROELSEN",
    "rating": [4.7],
    "reviews": [{good: 4, excellent: 12}]
}, {
    "id": 222,
    "title": "Efficient Learning Machines",
    "author": "Rahul Khanna",
    "rating": [4.5],
    "reviews": []
}, {
    "id": 333,
    "title": "Pro AngularJS",
    "author": "Adam Freeman",
    "rating": [4.0],
    "reviews": []
}];

// First lets doing a simple map first on a complex data structure
books.map(book => {
    var newObj = {title: book.title};
    return newObj;
});

// What if want to return only books with a rating greater than 4.5
books.filter(book => book.rating >= 4.5);

// We can also chain these to get just the titles returned.
books.filter(book => book.rating >= 4.5).map(b => b.title)

//////////////////// Higher Order Functions examples

//passing a function
let tellType = (arg) => {
    console.log(typeof arg);
};

let data = 1;
tellType(data);

// Lets look at a typical implementation of the Array.every

// in jsbin
const oddNumberFn = num => {
    return num % 2;
};

const every = (arr,fn) => {
    let result = true;
    for(let i=0;i<arr.length;i++)
        result = result && fn(arr[i])
    return result
}

console.log(every([1,2,3], oddNumberFn));

// Currying example basic

const sum = x => y => x + y;
// returns the number 3
sum (2)(1);
// returns a function y => 2 + y
sum (2);

// Another example

const curriedSubstring = start => length => str => str.substr(start, length);
const alwaysStartFirstChar = curriedSubstring(0);

// What is this going to print - try it out in JsBin
console.log(alwaysStartFirstChar(2)('Hello'));


// Generator functions
function * generatorFunction() {
    console.log('This will be executed first.');
    yield 'Hello, ';
    console.log('I will be printed after the pause');
    yield 'World!';
}
const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

// Another example

function * makeGen() {
    yield 'Hello';
    yield 'World';
}

const g = makeGen(); // g is a generator
g.next(); // { value: 'Hello', done: false }
g.next(); // { value: 'World', done: false }
g.next(); // { value: undefined, done: true }

// Recursion

function factorial(x) {
    // TERMINATION
    if (x < 0)
        return;
    // BASE
    if (x === 0)
        return 1;
    // RECURSION
    return x * factorial(x - 1);
}

factorial(3);

// another recursion example

function revStr(str){
    if (str === '') return '';
    return revStr(str.substr(1)) + str[0];
}
revStr('cat');

revStr('cat') //returns revStr('at') + 'c'
revStr('at') //returns revStr('t') + 'a'
revStr('t')// returns revStr('') + 't'
revStr('')// returns ''

// Another recursion example to work through in the class
function myLen(str) {
// implement this in class
}
