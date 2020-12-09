var _ = require('underscore');

//hierarchy in which the require of the node module works

//core module
//file or folder
//node_modules
var result =  _.contains([1,2,3],2);
console.log(result);