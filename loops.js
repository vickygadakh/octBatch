console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");

// for (s1;cond;inc/dcr){
//code block
// }

let x = 10;
// x = x + 1;
x++; // ++ increment operator

//x = x-1;
//x--;//decrement operator
console.log(x); 

for ( let a = 1 ; a < 11 ; a++ ) {
    console.log(a);
}

let color = ['red','blue','black','pink'];
let color1 = [];
for(let r = 0 ; r < color.length ; r++){
    if(color[r] != 'blue'){
        color1.push(color[r])
    }
}

console.log(color1);

//for of loop
//array index start with =0 , length start with = 1
let color2 = ['red','blue','black','pink'];
let clr = []
for( let x of color2){
    clr.push(x)
}
console.log(clr);


let color3 = ['red','blue','black','pink','red11','blue1','black1','pink1'];
let clr2 = [];

for(let ind = 2 ; ind < color3.length ; ind++){
    if(color3[ind] != 'black' && color3[ind] != 'blue1' && color3[ind] != 'pink1'){
                clr2.push(color3[ind]);
    }
}
console.log('clr2',clr2);

//for in loop object
stud = {
    name:'vicky',
    age : 30,
    mobno : 67676555,
    city : "pune"
}
for(let a in stud){
    console.log(a);
  console.log(stud[a]); //stud[name]>> vicky
}

let g = 5;
do{
    console.log(g);
    g++;
} while (g<6);

let v = "999999";
let r = parseInt(v);
console.log(r);

let a = {
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ],
    city:"pune",
    no :[222,22,222],
    status:true
    }
    let r1 = JSON.stringify(a)
    console.log(r1);
    let r2 = JSON.parse(r1);
    console.log(r2);
