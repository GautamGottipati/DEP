// A Chain adding function

// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// // returns 3

function add(n){
  // Let the currying begin!
  let sum = n;
  function adder(y){
    sum+=y;
    return adder;
  }
  adder.valueOf = function(){
    return sum;
  };
  return adder;
  
}