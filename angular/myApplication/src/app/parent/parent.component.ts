import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
   city = 'pune';
   stateFromChild:any;
   dataComingFromChild(data:any){
   this.stateFromChild = data.value;
   }
}
