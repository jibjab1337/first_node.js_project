// Part 5

// NPM (Node Package Manager)

// First project package 

const _ = require('lodash');

// nested arrays
const items = [1, [2, [3, [4]]]];

/*
flattenDeep: recursively "flatten"
array (get rid of nested arrays)

This is a lodash function
*/
const newItems = _.flattenDeep(items);
console.log(newItems);