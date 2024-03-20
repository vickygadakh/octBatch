import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
info = 'ASDDD EER DDDEdsd uuuu';
date1 = new Date();
inputboxValue:any
tableData = [
  {name : 'Vicky',
 contact :7687786868,
city : "pune"},
{
  name : 'Ravi',
 contact :4949494949,
city : "Mumbai"
},
{
  name : 'Thane',
 contact :6868686868,
city : "Jalna"
},
{
  name : 'Niki',
 contact :8888888888,
city : "Punjab"
},
{
  name : 'Pinki',
 contact :7777777777,
city : "latur"
},
]
}
