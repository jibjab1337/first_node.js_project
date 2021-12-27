// Part 4

// Built-in Modules

// OS modules

const os = require('os'); // No need for './' bc built-in

// Prints info about current user
const user = os.userInfo(); // userInfo() is a function of 'os'
console.log(user);

// Print the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// Print os type/release, total/free memory of system
// Set it all in an object "currentOS"
const currentOS = {
    name: os.type(), 
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}
console.log(currentOS);