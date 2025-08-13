"use strict";
// console.log("hello world");
// let age: number = 25;
// if(age > 18) {
//     console.log("You are an adult.");
// }
Object.defineProperty(exports, "__esModule", { value: true });
//another example
let sales;
let course;
// let isPublished: boolean = true;
let isPublished;
let level;
//literal means it takes only one value
//array example
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
//tuple example
let user = [1, 'John', true];
// user[0].--> here showing all the methods of number
// user[1] is of type string, so you can use string methods
console.log(user[1].toUpperCase()); // Output: 'JOHN'
console.log(user[1].length); // Output: 4
console.log(user[1].includes('o')); // Output: true





//enum example
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map