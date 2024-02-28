import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
//let a = 90;
title = 'myApplication';
//propertyName : data type = value;
a = 20;
b: number = 90;
c!: number;
city : string = "pune";
//db >>Defines communication betn a component and the DOM.
//it is a technique to link yuor data to your view layer
// 1. one way db  2. two way db
// 1. one way db is a simple one way communication where templete is changed when we make changes in typescript code
//1. string interpolation{{}} >> syntax {{propertyName}}
//2. property binding >>[]>> [attribute]="proprtyName"
//3.event binding >>()>> on event will bind data to the property

//two way data bind >> [()]>>[(ngModel)]="propertyName">> in two way db ,automation synchronization of data happen bet the model and the view
myName="vicky";
isDisable = false;
fruit!:string;
favFruit = "Mango";
constructor() { }

submit() {
 this.fruit = "Mango";
}
inputBoxValue(data:any){
  console.log(data.target.value);
  this.myName = data.target.value
  
}
}
