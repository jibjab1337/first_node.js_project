// Part 3 

// Modules
/*
You can run your .js code in one file but you can
also split it into parts using modules

Take the following code below as an example

After examining and running the code:

Now, what if we separated the names from the function sayHi
and put them into different files?

Every node.js file is a module by default! So all we have to
do is call other node.js files from the same directory like
a global
*/

// String name variables 
/* Commented out and placed in "part_3_names.js"

const secretName = 'Obito Uchiha';
const dan = 'Dan';
const brian = 'Brian';
*/

// Function sayHi
/* Commented out and placed in "part_3_func.js"

 Set a function sayHi to take an input string "name"
 and then print in the console 'Hello there, "name" ' 

const sayHi = (name) => { // Use ``, next to '1' on keyboard
    console.log(`Hello there, ${name}`); 
}
*/


//console.log(module);
/* 
When you run this 1st time, go to exports in the output 
of Module and notice "exports: {}"
    This means it's an object

This is important: whatever you dump in "exports" you can
access everywhere else in the Module
*/

// Require - access your variables in module.exports

// Assign your exports to a variable to access them
/* 
Note: ./ if accessing globals one level
     ../ if accessing globals two levels up
*/
// Accessing names from "part_3_names.js"
const exportedNames = require('./part_3_names'); 
console.log(exportedNames);

// Accessing function sayHi from "part_3_func.js"
// Note: variable name doesn't have to match function name
const sayHi = require('./part_3_func');

sayHi('Remy');
// To access the names, do exportedNames.*insert name*
sayHi(exportedNames.dan);
sayHi(exportedNames.brian);

// Because you did not export secretName, it's undefined
sayHi(exportedNames.secretName);

// Different ways to export variables/objects
// Continued from "part_3_export.js"
const newItems = require('./part_3_export');

// Print all exported data from "part_3_export.js"
console.log(newItems);

// Input newItems.singlePerson.name into sayHi function
sayHi(newItems.singlePerson.name);

// We invoke multiplyValues() w/o setting it to a variable
require('./part_3_product_func');
// This just runs the multiplyValues() inside that path