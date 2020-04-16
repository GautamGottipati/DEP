// Array Helpers

// This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

//     square() must return a copy of the array, containing all values squared
//     cube() must return a copy of the array, containing all values cubed
//     average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
//     sum() must return the sum of all array values
//     even() must return an array of all even numbers
//     odd() must return an array of all odd numbers

// Note: the original array must not be changed in any case!

if (!Array.prototype.sum) {
    Array.prototype.sum = function() {
  var sum=0;
        for(var i=0;i<this.length;i++)
    {
    sum=sum+this[i];
    }
    return sum;
    }
}
if (!Array.prototype.square) {
    Array.prototype.square = function() {
  var newArray=[];
        for(var i=0;i<this.length;i++)
    {
      newArray[i]=this[i]*this[i];
    }
    return newArray;
    }
}
if (!Array.prototype.cube) {
    Array.prototype.cube = function() {
  var newArray=[];
        for(var i=0;i<this.length;i++)
    {
      newArray[i]=this[i]*this[i]*this[i];
    }
    return newArray;
    }
}
if (!Array.prototype.average) {
    Array.prototype.average = function() {
  var sum=0;
        for(var i=0;i<this.length;i++)
    {
    sum=sum+this[i];
    }
    return sum/this.length;
    }
}
if (!Array.prototype.even) {
    Array.prototype.even= function() {
  var newArray=[],j=0;
        for(var i=0;i<this.length;i++)
    {
    if(this[i]%2==0)
    {
      newArray[j]=this[i];
      j++;
      }
    }
    return newArray;
    }
}
if (!Array.prototype.odd) {
    Array.prototype.odd= function() {
  var newArray=[],j=0;
        for(var i=0;i<this.length;i++)
    {
    if(this[i]%2!=0)
    {
      newArray[j]=this[i];
      j++;
      }
    }
    return newArray;
    }
}