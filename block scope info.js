/*
var a = 1;
let b = 2;
const c = 3;

function practice(){
    var a = 1;
    let b = 2;
    const c = 3;
    console.log('Function scope', a, b, c);
}


// block is an if statement a loop anything wrapped in curly braces

if(true){
    var a = 1;
    let b = 2;
    const c = 3;
    console.log('If scope', a, b, c);
}

practice();
console.log('Global scope', a, b, c); // gives you if scope 4 5 6 and global scope 4 2 3 redefined in function which is why its not 1 when logging let and const the same 

for(var a = 0; a< 10; a++){
    console.log(`Loop: ${a}`);
} // be careful with var here does not give you good answer in this case 10 ///// why let and const were created was issues with var

console.log('Global Scope:', a, b, c);
// let and const have block level scope and var has function scope ???? ///// be careful
*/
// libraries like jquery query selector






