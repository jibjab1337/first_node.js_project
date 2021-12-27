// Part 3 continued 1

// Setting variables to exports

// Local variable
const secretName = 'Obito Uchiha';

// Shareable variables
const dan = 'Dan';
const brian = 'Brian';

// Add your shareable variables to exports
module.exports = {dan, brian}

// Run the module and see what's in it
console.log(module);

/* 
When you run this 1st time w/o adding anything 
go to exports in the output of Module and notice
the line "exports: {}"
    This means it's an object and you can add to it

This is important: whatever you dump in "exports" you can
access everywhere else in the Module

Let's assume that you do NOT want to share the variable
"secretName"
    Don't put it in exports and it'll be treated
    as a local variable

Then let's say you want to share "dan" and "brian" with other
files in the Module
    Put "dan" and "brian" in exports and you'll be able to 
    use them as global variables within the Module
*/