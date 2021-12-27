// Part 4

// Built-in Modules

// HTTP (server-side) 
// Setup a very basic web server

const http = require('http');
const { createRequire } = require('module');

const server = http.createServer(
    (req, res) => { // request, respond
        // console.log(req)
/*
Let's make if-else cases that show different 
messages depending on what URL page you are on

For example, let's say you had an 'About' page
in http://localhost:5000/about: You'd want to
print a different page to show in 'About' page
*/        
        if (req.url === '/'){
            res.end('Welcome')
        }
        if (req.url === '/about'){
            res.end('About page')
        }
        res.end(    // default response for 
                    // wrong page
            `   
            <h1> Oopsies! Error </h1>
            <p> Error </p>
            <a href="/">Back to home</a>
            `
        )
    }
)

/*
5000 is arbitrary

On a web browser go to http://localhost:5000/

But remember that if you change the input
in server.listen(), that changes the URL to
http://localhost:(insert your new number)/

Remember to type in "node app.js" in terminal
before refreshing the localhost webpage to see
your changes
*/
server.listen(5000);