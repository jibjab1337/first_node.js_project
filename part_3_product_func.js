// Part 3 continued 4

// Another way to call a function from module
// w/o exports

const number1 = 10;
const number2 = 4;

function multiplyValues(){
    // Template literal
    console.log(`The product is : ${number1*number2}`)
}

// Instead of setting up exports, just invoke it
multiplyValues();