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
    fullName:['',[Validators.required]],
    mob:[null,[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    pan:[],
    password:[],
    gender:[],
    confirmpass:[],
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
}
