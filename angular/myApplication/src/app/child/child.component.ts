import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()    cityFromParent:any;
  @Output () dataFromChild = new EventEmitter<any> ();
  state="MH-O9";

  constructor(){
    console.log('constructor calling');
    
  }

  dataFromChildParent(){
    this.dataFromChild.emit(this.state);
  }

  ngOnInit(){
    //oninit trigger first if componant dont have inputbound property
    //also it will trigger only once at the time of comp initialisation.
    console.log('onInit calling...');
    
  }

  ngOnChanges(){
    //onChanges if hook called first if compo having input bound property.
    // also it will reapeteadly trigger omn every change of input bound property
    console.log('onChanges calling...');
    
  }


ngDoCheck(){
  //it will trigger very first time after initialization of ngonchanges lfh
  //repeatatly trigger on every changes of onchanges lfh
  console.log('do check calling');
  
}

ngAfterContentInit(){
  console.log('ngAfterContentInit calling');
  
}

ngAfterContentChecked(){
  console.log('ngAfterContentChecked calling');
  
}

ngAfterViewInit(){
  console.log('ngAfterViewInit calling');
  
}

ngAfterViewChecked(){
  console.log('ngAfterViewChecked calling');
  
}

ngOnDestroy(){
//once
console.log('ngOnDestroy');
}
}
