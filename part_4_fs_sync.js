// Part 4

// Built-in Modules

// fs (File system) modules

/*
Two types of fs
Synchronously - non-blocking
Asynchronously - blocking
*/

//--------------Synchronous Approach--------------//

// Call the built-in module in a structure
const {readFileSync, writeFileSync} = require('fs');

// IMPORTANT //
console.log('Start of Synchronous task');

/* 
Instead of setting it to a structure as above, you can
also set it to a const variable instead

const fs = require('fs');
fs.read

Not much of a difference, just showcasing different
methods of calling these built-in modules
*/

// Reading from file system

const first = readFileSync('./part_4_content/fs_first.txt',
'utf8');
const second = readFileSync('./part_4_content/fs_second.txt',
'utf8');
// the 2nd argument 'utf8' means turn it into UTF-8 encoding

/*
Prints what's inside the read file system path defined
in const first and const second variables
*/
//////console.log(first, second);

// Writing a new file
/*
If node doesn't detect the specified filename
in writeFileSync, it will create a new one

Meaning that inside folder "part_4_content", we will
see a new file named "check_this_file.txt" if it
doesn't detect one

If you want to append to the file, add another argument
In this case, add {flag: 'a'}
    Look up flags. This one in particular starts a new
    line and copies again the stuff inside .txt files
*/
writeFileSync('./part_4_content/check_this_file.txt',
`This file is a new file created by writing w/ fs
 Let's combine fs_first.txt and fs_second.text w/
 string literals
 The first file: ${first}
 The second file: ${second}`,
 { flag: 'a' }
 );
/*
If the file "check_this_file.txt" isn't already there
it should appear after this write command
*/

// IMPORTANT //

/*
Now let's say we added the following 2 console.log
statements below

This is done synchronously, meaning that it has
to wait for the reading and writing function

Synchronously means that js executes line by line

What if we had multiple users? Like 10 users?
What if writing to the file was time consuming?

Node.js will NOT be able to serve other users
while one user is processing these read and write
tasks. Again, imagine if these tasks are time
consuming or if one user takes forever. This can
slow down the entire Node.js program as a result

That is a HUGE problem which means that
for some time-consuming, resource-intensive tasks
it's better to do asynchronous approach

Read the important notes at the bottom of the
"part_4_fs_async" program to understand
the difference between Sync and Async approaches
*/
console.log("Finished with Sync task");
console.log("Starting next task");
