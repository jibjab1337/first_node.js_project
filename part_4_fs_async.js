// Part 4

// Built-in Modules

// fs (File system) modules

/*
Two types of fs
Synchronously - non-blocking
Asynchronously - blocking
*/

//--------------Asynchronous Approach--------------//

// Reading from file system asynchronously

const { readFile, writeFile } = require('fs');

/*
IMPORTANT: CALLBACKS ARE JS ASYNC FUNCTIONS

2nd argument "(err, res) =>" is the callback function

A callback is a function passed as an argument to
another function.

In callbacks, one function has to wait for another
function

More info on callbacks: 
https://www.w3schools.com/js/js_callback.asp
*/

// IMPORTANT //
console.log("Start of Asynchronous task");

readFile(
    './part_4_content/fs_first.txt', 
    'utf8',
    // If you do not have utf8 in argument, it will post buffer
    (err, result) => { // pass in two arguments
        if (err) {  // if error, print error & return
            console.log(err)
            return;
        }
        //console.log(result); // else, print result
        const first = result;
        readFile(
            './part_4_content/fs_second.txt', 
            'utf8',
            (err, result) => {
                if (err) {  // if error, print error & return
                    console.log(err)
                    return;
                }
                const second = result;
                writeFile(
                    './part_4_content/async_result.txt',
                    `Async results : ${first} ${second}`,
                    (err, result) => {
                        if (err) {  // if error, print error & return
                            console.log(err)
                            return;
                        }
                        //////console.log(result);
                        // IMPORTANT //
                        console.log("Finished with Async task");

                    }
                )
            }    
        )
    }
)
// IMPORTANT //
console.log("Starting new task");

/* 
With all these nested callbacks, you will get an undefined
result in the terminal but in the file "async_result.txt"
you will see the printed statement that was specified
inside writeFile() [the second argument w/ literals]
*/

/*
Now compare the printed console.log statements between
"part_4_fs_sync" and "part_4_fs_async"

In "part_4_fs_async", notice that the console.log
statement "Starting new task" printed BEFORE the nested
callback console.log statement "Finished with Async task"

IMPORTANT: THE MOMENT YOU START THE ASYNC TASK, YOU OFFLOAD
THAT TASK AND CONTINUE WITH THE CODE

This is extremely crucial to understand because now if 
you had multiple users and one user is reading/writing
something, it will offload that task and continue the
rest of the program so that other users can continue
using the program. No waiting, no lag compared to the
Synchronous approach
*/

/*
However, notice that Async approach is messy and filled
with nested callbacks

Later on use promises or the Async/Await method

More information on promises and Async/Await
https://www.w3schools.com/js/js_promise.asp
https://www.w3schools.com/js/js_async.asp
*/