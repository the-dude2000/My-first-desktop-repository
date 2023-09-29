/* // Switches
const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'black':
        console.log('Color is black');
        break;
    default:
        console.log('Color is not red or black.'); // use if you have a lot of cases
        break;
    
    
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thrusday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}


console.log(`Today is ${day}`);



// Functions

// Function declaration

function greet(firstName = 'John', lastName = 'Doe'){ // can do this now with es6
    //if(typeof firstName === 'undefined'){firstName = 'John'}
    //if(typeof lastName === 'undefined'){lastName = 'Doe'}
    //console.log('Hello');
    return 'Hello' + firstName + ' ' + lastName;
}

//console.log(greet('Steve', 'Smith')); // get rid of john and doe you get undefined in console, put in Steve Smith its going to overwrite the defualt
// if you get rid steve and smith John doe will go through, if not steve smith will show up

// Function expressions

const square = function(x =4){ // can do default
    return x * x;
};

// console.log(square()); // if nothing passed in will go to four

// Immediately Invokable Function expressions - IIFEs its a function you declare and run at the same time.

(function(){
    console.log('IIFE Ran..');
})(); // ends like this have to add parentheses now get IIFE Ran..

(function(name){
    console.log('Hello' + name);
})('Brad'); // useful for module pattern bunch of IIFEs and stuff private method and properties



// Property methods

// When a function is put inside an object its called a method

const todo ={
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...'); // can also define functions for this object outside of this.
}

todo.add(); // gives you Add todo..
todo.edit(22); // gives you Edit todo 22
todo.delete(); // gives you Delete todo...

// For loop

for(let i =0; i < 10; i ++){
    if(i === 2){
        console.log('2 is my favorite number');
        continue // keep going with the loop go to next iteration
    } // cant use const inside a loop since it will keep changing use var or let
   // gives you Number 0 to whatev's

   if(i === 5){
    console.log('Stop the loop');
     break;
   }
   console.log('Number' + i);
}



// While loops


let i = 0;

while(i <10){
    console.log('Number ' + i);
    i++;
}

// Do while

let i = 100;

do {
    console.log('Number ' + i);
    i++;
}

while{i < 10}; // gonna get number 100 do will run no matter what
// lopp through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i =0; i < cars.length; i++){
    console.log(cars[i]); // gives u ford and eveything in list
}

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// Foreach
cars.forEach(function(car, index, array){ // shows array with indexes
    console.log(car); // gives you the same result all items in list cleaner way to do this
});


// Map
const users = [
    {id: 1, Name: 'John'},
    {id: 2, Name: 'Sara'},
    {id: 3, Name: 'Karen'}
];

const ids = users.map(function(){
return users.id;
});

console.log(ids); // gives you the array of ids

// For in 
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){ // gives you all things in user
    console.log(`${x} : ${user[x]}`); // loops through object and gives all items in user key value pairs
}
*/