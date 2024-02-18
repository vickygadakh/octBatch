// data types: 1.premitive data types 
//             2.non-premitive data types

// 1.premitive data types:single value holder-- in javascript include
// 1.Number
// 2.String
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Object
// 7.Symbol

// 2.Non-premative: object

//number : whole no or decimal no
let amount = 98.9898; //76767777

//typeof(): is used to get data types of data

console.log(typeof(amount));

//string dt ; ''/""
let city = 'Mumbai';
console.log(typeof(city));

//Boolean:true/false
let isFavMovie = true;//"true" //string
console.log(typeof(isFavMovie));

//undefined
let a ;
console.log(a);
console.log(typeof(a));

let b = undefined;
console.log(b);
console.log(typeof(b));

//var false = "vicky" //we can not declare reserved keyword as a variable name

let r = "none" //string

let c = null;
console.log('c',typeof(c));
document.write(c,'<br>')

let cash = BigInt("9999999999999999"); //1.3656 //1.37
document.write(cash,'<br>')

var stdName = "vicky,om,rinku"

//array:[]: listing >>heterogenous array
let colors=['red','orange','black'];//homogenous array
var studentNames = ["pravin",400,true,"om","sidh","pranav",test()]//heterogenous array
document.write("colors >>",colors)
document.write("studentNames >> ",studentNames)
console.log(studentNames);

function test(){
return 50*20;
}

var studentNames = ["pravin",400,true,"om","sidh","pranav",test()]//heterogenous arr

let colors2 = ['red','orange','black',"yellow"];

document.write("<br>",colors2[6])

let cars = []; //empty array
console.log("cars>>",cars);

//length operator : it gives length of array or string

console.log(colors2.length);

//object: {key : value}
let std = { name:"vickyyy" ,age:25,city:"pune"};
let emp = {}; //empty obj
console.log(std.city);

//array of obj
let std2= [
    { name:"vickyyy" ,age:25,city:"pune"},
    { name:"rushi" ,age:30,city:"mumbai"},
    { name:"pravin" ,age:28,city:"satara"}
]

console.log(std2[0]);

console.log(std2[0].age);
console.log(std2.length);
