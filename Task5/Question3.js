// new with apply
// https://www.codewars.com/kata/53c7da8baf72924af8000405/train/javascript

// In JavaScript we can create objects using the new operator.
// For example, if you have this constructor function:

function construct(Greeting, ...arg) {
    return new Greeting(...arg);
}
