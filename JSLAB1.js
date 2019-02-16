/*
//Declare variables inside JS


/!*const y = 50;

let x = 10;

let f;
let array = [1,2,3,5,6];
let age = 20;
let name = 'Ali';

name = 123; //Now it is over-ridden as a number. It was an object as Ali

const PI = 3.14; //Always try to use cost values so it doesnt over-ride ever it is case sensitive
console.log(typeof (f));
console.log(typeof (name));
console.log(x);

console.log("Hello Welcome to Java Script");
console.error("This is an error");
console.debug("The value of x in iteration 10 was " + 200);*!/

let names = ["Abdullahi", "Mohammed", "Hassen"];

console.log(names);

console.table(names);

function add (a, b, theFunctionToUse) { //You can include a function in it example : aFunction
/!*
    theFunctionToUse(a+b);
*!/
    return display(a+b);
}

add(1,2,display);

function display(value){
    console.log(value);
}

function display2(value){
    console.log("The value you gave me is "+value);
}


console.log("---Display [1]---");
display(10);
display("Hello World");
console.log("---Display [2]---");
display2(10);
display2("Hello World");


add(2,"Hello");

/!*console.log(add(2,4));
console.log(add(2,"Hello"));*!/

let newVariable = display; //Functions can be assigned as variables

let newVar = function(value){
    console.log("The value you gave me is: "+value);
}

newVar("Meow");
newVariable(2);

console.log(add(10,20,a=>console.log("Hello Mr, "+ A)));


let x = value=>console.log("The value you gave me is "+value);

let y = (a,b,theFunctiontoUse)=>theFunctiontoUse(a+b);

(a, b, theFunctionToUse) => a+b;

function Complex(a,b,Func){
    a= 1+10;
    b=b+20;
    return a+b;
}
//To turn into arrow function.

(a,b,Func)=>{ a= 1+10; b=b+20; return a+b; }

(a,b)=>a+b;

//ternary operators.

a=>a<0? "Negative" : "Positive";
//or
a=>a<0 ? console.log("Negative") : console.log("Positive");
*/

let  WeirdArrays = [1,2,3,4,5,6,2,5,23,54,255];
console.log(WeirdArrays);
console.table(WeirdArrays);
console.log(WeirdArrays.length);
console.log(...WeirdArrays);

/*
let flatArray = WeirdArrays.flat(2);
console.log(flatArray);
*/



function compare(a,b){
    /*if(a<b)
        return true;
    else
        return false;*/
    return b-a;
}
let sortedArray = WeirdArrays.sort(compare);

let filteredArray = WeirdArrays.filter(a=>a >18);

console.log(filteredArray);

let sum = WeirdArrays.reduce((acc,curr)=>acc+curr); //adds
let sum1= WeirdArrays.filter(a => a%2==0).reduce((acc,curr)=>acc+curr); //adds odd no

console.log(sum);
console.log(sum1);

let negArray = WeirdArrays.map(a=>a-2); //Change an array and map it to a different array negatve - ** power * multiply

console.log(negArray);

WeirdArrays.forEach(a=> console.log(a)); // foro loop
WeirdArrays.forEach((a,index)=> console.log(index, a));
WeirdArrays.push(1000);
console.log(WeirdArrays);
console.log(WeirdArrays.pop());
console.log(WeirdArrays.splice(8,1));
console.log(WeirdArrays);


let exARR = [20,30,35,63,64,59,66,49];

exARR.forEach(a=>console.log(a));
exARR.splice(0,2);
console.log(exARR);
exARR.splice(4,2);
console.log(exARR);
exARR.push(10);
exARR.push(20);
console.log(exARR);

let matrix = [ [2, 3], [34, 89], [55, 101, 34], [34, 89, 34, 99]];

let x= matrix.flat(Infinity).reduce((acc,curr)=>acc+curr)/matrix.flat(Infinity).length;
console.log(x);

