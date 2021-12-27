// Part 3 continued 2

// Function sayHi
/*
 Set a function sayHi to take an input string "name"
 and then print in the console 'Hello there, "name" ' 
*/
const sayHi = (name) => { // Use ``, next to '1' on keyboard
    console.log(`Hello there, ${name}`); 
}

/*
 To access this function sayHi in other files, do the same
 thing like with the name variables in "part_3_names.js"

 Dump it in exports and then call it in other files by setting
 it to a variable that you can access in that file
*/
module.exports = sayHi;