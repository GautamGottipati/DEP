// Function Composition

// Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well here, but this is my explanation, in simple mathematical notation:

// f3 = compose( f1 f2 )
//    Is equivalent to...
// f3(a) = f1( f2( a ) )

function compose(f,g) {
  // Compose the two functions here!
   return function() {
     return f(g.apply(this, arguments)); 
   };
}