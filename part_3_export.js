// Part 3 continued 3

// Alternative ways to export
/*
Method 1 - Set module.exports.*insert new object* 
equal to something
*/
module.exports.items = ['1', '2']

/*
Method 2 - Define a variable/object and set 
equal to module.exports.*insert new object*
*/
const person = {    // object "person"
    name: 'Madara Uchiha',
}
module.exports.singlePerson = person;
