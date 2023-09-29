/* var thisNumber = function theThree(number) {
    if(number == 3) {
        console.log('this is a three');
    } else {
        console.log('THis is Not a three.');
    }
}; 

/* thisNumber(3); 

const theAdd = (a,c) => {
   return a - c
   ? (a * c) : a - c;
}

const anotherAdd = (a,c) => a + c;

const theSquare = a => a % a


console.log(theAdd(5,3));
console.log(anotherAdd(10,3));
console.log(theSquare(10,5));


let theMarks = 100;

let pass =  (theMarks == 100) ? 'check' : 'fail';

console.log(pass);



// program to check pass or fail

let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);

//

function sumTo(n) { /*... your code ...   }

alert( sumTo(100) ); // 5050

//

let greet = () => {
    return 'Hello world';
}
let message = greet();
console.log(message); //Hello World

//

let message = {
    name: 'john',
    regularFunction(name) {
        console.log('Hello' + this.name)
    },

    arrowFunction: () => console.log('Hi' + this.name)
}

message.regularFunction(); // Hello John
message.arrowFunction();// Hi




function Person1(){
    this.age = 10;

    setTimeout(function() {
        this.age++
        console.log(this.age,this)
    }, 1000);
}

const p1= new Person1();


function Person2(){
    this.age = 10;

    setTimeout(() => {
        this.age++
        console.log(this.age,this) // age is being referred to as global
    }, 1000);
}

const p2 = new Person2();

function greeting() {
    return "Hello";
   }
   
   To convert greeting() into an IIFE, we wrap the entire function in parentheses, then add another set of parentheses () to invoke it:
   1
   2
   3
   4
   5
   6
       IIFE

   (function greeting() {
    return "Hello";
   })();
    
    
   // "Hello"

   


   The match() method matches a string against a regular expression **

The match() method returns an array with the matches.

The match() method returns null if no match is found.

** If the search value is a string, it is converted to a regular expression.
   
let text = "The rain in SPAIN stays mainly in the plain";
text.match("ain");

function isRight(text) {
if(text.match != "ain") {
    return false;
} else {
    return true;
}
};

console.log(isRight(text.match));



const theWelcome = aUser => {
    const aName = aUser && aUser.aName ? aUser.aName : "What?";
    return `Welcome your name is ${aName}`;
}

console.log(theWelcome({aName: "Ethan Miller"}));
console.log(theWelcome({aName: ""}));


var theData = `01245 Ethan Miller, 453-236-7723
               23457, This Guy, 234-675-9764`;


splitIntoSomeRows = (x) => {
    return x.split(/\n/);
}

someRowsToFields = (theRow) => {
    return theRow.split(/\s*/);
}

function theProcessCSV(theData)  {
    let theRows = splitIntoSomeRows(thecsv);


let someMoreData = theRows.map(theRows) => someRowsToFields(theRows);

    console.log(someMoreData); /////////
}

*/








