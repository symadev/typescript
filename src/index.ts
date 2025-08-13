// console.log("hello world");
// let age: number = 25;
// if(age > 18) {
//     console.log("You are an adult.");
// }


//another example
let sales: 12345;

let course: 'typeScript';
// let isPublished: boolean = true;
let isPublished: true;
let level: any

//literal means it takes only one value



//array example
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);   


//tuple example
let user: [number, string, boolean] = [1, 'John', true];
// user[0].--> here showing all the methods of number
// user[1] is of type string, so you can use string methods
console.log(user[1].toUpperCase()); // Output: 'JOHN'
console.log(user[1].length);        // Output: 4
console.log(user[1].includes('o')); // Output: true



//enum example
enum Size {
    Small = 1,
    Medium ,
    Large ,
}
let mySize: Size = Size.Medium;
console.log(mySize); 


//example of function
function calculateTax(income: number ): number {
    if (income < 500) 
        return income * 100;
        return income * 100;
        //undefined
    
    
}
//you have to must include here if the condition is true then it returns one if not it return another  one , yu have to declare both the conditions
// you must return the numbers


//object example
let employee: {
     readonly id: number;
    name: string;
   retire :( date:Date)=> void; //optional property that makes a date but returs= void
} = {
    id: 1,
    name: 'John Doe',
      retire :( date:Date)=> {
        console.log(date);
      }
   
};
   

//readonly means you cannot change the value of id
// employee.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.