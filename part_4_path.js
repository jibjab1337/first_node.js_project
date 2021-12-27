// Part 4

// Built-in Modules

// Path modules

const path = require('path'); // built-in

console.log(path.sep) // print seperator 

/*
.join
Combine the file paths of a folder, subfolder and 
file inside through "join", then print in console
*/
const filePath = path.join(
    '/part_4_content', 
    'part_4_subfolder',
    'part_4_test.txt')

console.log(filePath);

/*
.basename
Prints the base file inside the two folder 
directories in "filePath" or the .txt file
*/
const base = path.basename(filePath);
console.log(base);

/*
.resolve
Returns an absolute path or the exact directory in a
system for the specified arguments, in this case:
    'part_4_content',
    'part_4_subfolder',
    'part_4_test.txt'

Why is this important? Because let's say we're running
a Node.js program that needs to find an exact file 
that is installed in a different computer/system. A
different user might install that program in another
directory different to yours so it's IMPORTANT to find
that exact directory for different cases.   

*/
const absolute = path.resolve(__dirname, 
    'part_4_content',
    'part_4_subfolder',
    'part_4_test.txt')

console.log(absolute);