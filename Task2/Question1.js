// Get the Middle Character

// You are going to be given a word. Your job is to return the middle character of the word. 
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Solution

function getMiddle(s)
{
  //Code goes here!
  var l = s.length;
  if(l%2==0)
    return s.slice((l/2)-1,(l/2)+1);
  if(l%2>0)
    return s.slice(l/2,(l/2)+1);
}