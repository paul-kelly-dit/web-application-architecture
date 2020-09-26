const squared = (n1) => {
    let result = n1 * n1;
    console.log("Result : " + result);
    return result;
}

const adder = (n1) => {
    let result = n1 + 1;
    console.log("Result : " + result);
    return result;
}

[1, 2, 3, 4, 5].forEach(squared);​
  [1, 2, 3, 4, 5].forEach(adder);


let numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
    let result = numbers[i] * numbers[i];
    console.log(result);
}


for (var i = 0; i < numbers.length; i++) {
    let result = numbers[i] + 1;
    console.log(result);
}