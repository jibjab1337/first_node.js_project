// Part 2

/*
Globals     - No Window

__dirname   - path to current directory
__filename  - file name
require     - function to use modules (CommonJS)
module      - info about current module (file)
process     - info about env where program is executed
*/

console.log(__dirname);     // Print path to current directory
console.log(__filename);    // Print the file name of program

// Print something for a set interval of milliseconds

// IMPORTANT: To stop node.js program in terminal, ctrl + C

setInterval(    // do something for specified amount of time
    () => {
        console.log('Hello World every second');
    }, 1000     // 1000 milliseconds = 1 second
)