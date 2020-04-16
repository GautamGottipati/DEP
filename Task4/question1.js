// Using closures to share class state

// https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript

// In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object.
// The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.


// Let's make a Cat constructor!
var Cat = (function () {
    // ... your code here.
    var cats = {
         count: 0,
         totalWeight: 0,
         avgWeight: 0
       }
       function Cat (name, weight) {
         if (!name || !weight) {
           throw new Error('Both `name` and `weight` should be provided');
          }
         cats.count++;
         this.name = name;
         Object.defineProperty(this, 'weight', {
           get: function () {
             return this._weight || 0;
           },
           set: function (val) {
             cats.totalWeight = cats.totalWeight - this.weight + val;
             cats.avgWeight =  cats.totalWeight / cats.count;
             return this._weight = val;
           }
         });
         this.weight = weight;
       }
       Cat.averageWeight = function () {
         return cats.avgWeight;
       }
       return Cat;
   }());
