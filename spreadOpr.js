//sp opr : [...] javascript spd opr (...) allow used to quickly copy all 

let number = [1, 2, 3, 4, 5, 6];
let no2 = [...number]
console.log(no2);

let [no1, no3, ...no5] = number;
console.log(no3);
console.log(no4);
console.log(no5);

let a =[11,33,44,45];
let b = [5,6,7,8,9];
let c = [...a, ...b];
console.log(c);

let obj = { name:"vicky",age:44,city:"pune", state:'mh'}
let obj1 = {...obj}
console.log(obj1);

let obj2 = { name:"rushi",age:24,city:"pune", mobno:87878}

let obj3 = {...obj , ...obj2}
console.log(obj3);