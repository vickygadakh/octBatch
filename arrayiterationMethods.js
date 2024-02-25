//forEach 
let a = [
    {
        name:"vicky", city: "pune"
    },
    {
        name:"rushi", city: "pune"
    },
    {
        name:"siddh", city: "pune"
    },
    {
        name:"siddh1", city: "pune"
    },
    {
        name:"siddh2", city: "pune"
    }

]

let names = [];
for (let index = 0; index < a.length; index++) {
if(a[index].name == "siddh"){
    break;
}
names.push(a[index].name)
}
console.log(names);

//a.forEach(item => {
 //   names.push(item.name)
//})
//console.log(names);

//var n1 = a.map(element =>{
 //   return element.name
//})

n2 = a.filter(ele=>{
    if(ele.name == "rushi"){
        return ele;
    }
})
console.log(n2);

let ele = a.find(ele =>{
   return ele.name == 'siddh3'
})
console.log(ele);