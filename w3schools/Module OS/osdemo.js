const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();


console.log("The Free Memory available is :- "+ freeMem);
console.log("The Total Memory :- "+ totalMem);

//Template String
//ES 6 / ES2015 : ECMAScript 6

console.log(`Total Memory : ${totalMem}`);
console.log(`Free Memory : ${freeMem}`);







