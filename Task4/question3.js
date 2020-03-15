// Function Cache
// https://www.codewars.com/kata/525481903700c1a1ff0000e1/train/javascript
// If you are calculating complex things or execute time-consuming API calls,
// you sometimes want to cache the results. In this case we want you to create
// a function wrapper, which takes a function and caches its results depending
// on the arguments, that were applied to the function.

// var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); 

function cache(func) {
  // do your magic here
  
  let cacheObject = {};
  let cacheArray = new Array();

  return function(value1, value2) {
    let argumentArray = [value1,value2];
    let argumentPassed = JSON.stringify(argumentArray);
    if (cacheArray.includes(argumentPassed)) {
      return cacheObject[argumentPassed];
    } else {
      cacheArray.push(argumentPassed);
      cacheObject[argumentPassed] = func(value1, value2);
      return cacheObject[argumentPassed];
    }
  };
}