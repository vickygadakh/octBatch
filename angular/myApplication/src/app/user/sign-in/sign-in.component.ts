import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

signInForm! : FormGroup;
visible = false;
isMatch=false;
visibleConfirm = false;

constructor( private formBuilder: FormBuilder){}

ngOnInit(){
  this.formDetails();
}

formDetails(){
  this.signInForm = this.formBuilder.group({
    fullName:['Vicky Gadakh',[Validators.required, this.whiteSpaceRemoveValidator]],
    mob:[8208676719,[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    pan:[],
    password:[],
    gender:['male'],
    confirmpass:[],
    tc:[true,[Validators.requiredTrue]]
  })
}

visiblePassword(){
  this.visible =!this.visible;
}

visibleConfirmPassword(){
  this.visibleConfirm = !this.visibleConfirm;
}

passMatch(){
  if(this.signInForm.value.password != null){
    if(this.signInForm.value.confirmpass == this.signInForm.value.confirmpass) {
 this.isMatch = false 
}else{
this.isMatch= true;
}
  }
}
submit(){
  console.log('this.signInForm.value',this.signInForm.value);

}

whiteSpaceRemoveValidator(inputBoxValue:any){
  console.log('inp val',inputBoxValue);
  let spaceInclude = inputBoxValue?.value?.includes('  ')

  return spaceInclude ? {'whiteSpaceErorr':true} : null
  
}
}
