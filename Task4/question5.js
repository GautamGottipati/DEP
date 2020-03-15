// Function composition
// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript
// Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:

// const addOne = (a) => a + 1
// const multTwo = (b) => b * 2
// const addOneMultTwo = (c) => multTwo(addOne(c))

// addOneMultTwo(5) // returns 12

const compose = (...functions) => args => functions.reduceRight((args,funcs)=>funcs(args),args);