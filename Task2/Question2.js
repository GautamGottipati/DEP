// Word Count

// Instructions
// Output

// Can you realize a function that returns word count from a given string?
// You have to ensure that spaces in string is a whitespace for real. 
// What we want and finish of work:
// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on
// What kind of tests we got for your code:
// Function have to count words, but not spaces, so be sure that it does right.
// Empty string has no words.
// String with spaces around should be trimmed.
// Non-whitespace (ex. breakspace, unicode chars) should be assumed as delimiter
// Be sure that words with chars like -, ', ` are counted right.

// Solution

function countWords(str) {
    // ...
  //   var arr = str.split(' ')
  //   var count = 0;
  //   var len = arr.length;
  // //   console.log(arr,arr.length,arr[0]);
  //   for(var i=0;i<len;i++){
  // //     console.log(arr[i])
  //       if(arr[i]!=="" )
  //           count++;
  //   }
  //   return count;
    var words = str.match(/[a-zA-Z0-9\-'`]+/g);
    return (str == '' || !words) ? 0 : words.length;
    
  }
  