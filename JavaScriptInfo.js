/*
Window is the global object in client side JavaScript
MAybe node.js is a javascript runtime that runs as a standalone process on your machine and your computer
Your computer system is your environment in Node.js
In client side Javascript the window or browser is the global envrionment node.js and chrom same javascript engine called V8
localStorage, new Fetch AP, navigator object which includes geolocation
includes methods like alert and prompt and confirm
can type window in console to see all kinds of stuff 
core of DOM is document object  fetch which is the fetch API to make HTTP requests

// WINDOW METHODS / OBJECTS / PROPERTIES


window.console.log(123); an option 

//Alert
A little box that pops p with an alert 
example: window.alert('Hello World); gives you a pop up that says hello world just alert is fine most of the time will not see window

// Prompt
const input = prompt(); prompt takes an input similar to alert
alert(input);


// Confirm
// if(confirm('Are you sure')){
    console.log('YES'); put in console stuff if that goes if not other way
} else {
    console.log('NO);
}

let val;

// outter height and width 
val = window.outerHeight;

console.log(val); shrink down get different number and so on ///// window.outerWidth;
 can also get inner for scroll bars and stuff console to top thing /////

 // Scroll points 
 Where u are in terms of scrolling val = window.scrollY; vertical axis things with html div style  margin top and things scrollX horizontal axis

 // Location object
 val = window.location;

 console.log(val); location in console stuff like host the loopback address and the port, hostname just address query strings with search can get one thing
 like example: val = window.location.hostname if u got server with domain name it will show it here. window.location.port, etc //// in search bar can pujt this in them /////
 
 // Redirect
 window.location.href = 'https://google.com';
// Reload
window.location.reload();

// History object

window.history.go(-2) /////
val = window.history.length;

// Navigator object named after the old Netscape Navigator browser
val = window.navigator;  stuff in console appName will always be Netscape unless you are using IE then it will be IE   hvhvhjihui
val = window.navigator.appversion; otherthings like this can do ifs or whatever be careful here with platforms

console.log(val);







*/

