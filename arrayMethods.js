const fruits = ["Banana","Orange","Apple","Mango"];
let size =fruits.length;
console.log(size);

let arr = [100,300,303];
let arr1 = arr.toString();
console.log(arr1);

let color = ['red','blue','black'];
let popReturnValue = color.pop();//pops out last element
console.log(popReturnValue);//it will return deleted itom
console.log(color);

const fruits1 = ["Banana","Orange","Apple","Mango"];
let pushedReturnedValue = fruits1.push('papaya','mango')//the push() method adds a new element to the array
console.log(pushedReturnedValue);//it will return length of original arr
console.log(fruits1);

const fruits2 = ["Banana","Orange","Apple","Mango...."];
let shiftReturnedValue = fruits2.shift()//the shift() method delets last element from array
console.log(shiftReturnedValue);//it will return removed element
console.log(fruits2);

const fruits3 = ["Banana","Orange","Apple","Mango"];
let unshiftReturnedValue = fruits3.unshift("pinapple")//the unshift() method adds a new element (at the start)
console.log(unshiftReturnedValue);//it will return length of original arr
console.log(fruits3);

console.log(fruits3.join(" "));

console.log(fruits2.concat(fruits3));



