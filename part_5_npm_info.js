// Part 5

// NPM (Node Package Manager)

// First project package notes

/*
npmjs.com

npm is installed by default when you
install Node.js

Let's you do three things
1. Use your own code in other projects
2. Use other devs code in your projects
3. Share code

Keep in mind, it's an open community
so there's no quality control, your
discretion is advised

They go by different names like package
dependency, module etc. but they mean the
same thing.



Use npm package locally (one file only)
Command: "npm i <packageName>"

Use npm package globally (all projects)
Command: "npm install -g <packageName>"

For the most part, your projects should
focus on just using local packages bc
global packages take up space



package.json - store important info about
               your project or package

Three ways to install package.json
1. manual: Create package.json in root
   then create properties etc.
2. Command: "npm init" 
   step by step, press enter to skip
3. Command: "npm init -y"
   everything default

When you run "npm init" command, you
will enter information in terminal
and then the package.json file will
be created (which you can edit)

For the most part, it's just faster
to use "npm init -y" command



Why is this necessary?

Install dependencies like lodash and
bootstrap using "npm i lodash" as ex.

If you don't have it, this will create
a folder called "node_modules" where
you can see the dependencies you install

The point of installing your project
package is so that you can install
other packages/dependencies and have
them load in the "dependencies" object
in "package.json" which you need for 
your project.

That way, when someone else installs/runs
your project, it will have all the 
necessary dependencies/packages as well



"node_module" folder can get big so an
alternative is to make a github repo

Go to github and start a new repo
When you confirm repo name, you'll be
taken to Quick setup page. In the 
section labeled
"or push an existing repo from the
command line" 
you will see three command lines. 
Copy those lines

Back to your Node.js project, create
a gitignore file by creating new file
and entering ".gitignore"

A ".gitignore" file is just a simple
file that tells github which files
to ignore from the Node.js files

On the .gitignore file, type in
the file you want to ignore

In our case, it's "/node_modules"

*/