import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

signUpForm! : FormGroup;

constructor( private formBuilder: FormBuilder){}

ngOnInit(){
  this.formDetails();
}

formDetails(){
  this.signUpForm = this.formBuilder.group({
    fullName:['',[Validators.required]],
    mob:[null,[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    pan:[],
    pass:[],
    gender:[],
    cfnpass:[],
  })
}
}
