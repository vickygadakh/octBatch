import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';

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

constructor( private formBuilder: FormBuilder, 
  private apiCallService:ApiCallService,private router:Router){}

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
  if(this.signInForm.value.confirmpassword != null){
    if(this.signInForm.value.password == this.signInForm.value.confirmpass) {
 this.isMatch = false 
}else{
this.isMatch= true;
}
  }
}
submit(){
  console.log('this.signInForm.value',this.signInForm.value);
  let req = {
    "full_Name" : this.signInForm.value.fullName,
    "mob_No" : this.signInForm.value.mob,
    "gender" : this.signInForm.value.gender,
    "pass"  : this.signInForm.value.password,
    "confirm_pass" : this.signInForm.value.confirmpass,
    "terms_cond" : this.signInForm.value.termscondition
  }
   this.apiCallService.postApiCall(req).subscribe(respo=>{
    this.router.navigateByUrl('/user/userSucc')
   })
}

whiteSpaceRemoveValidator(inputBoxValue:any){
  console.log('inp val',inputBoxValue);
  let spaceInclude = inputBoxValue?.value?.includes('  ')

  return spaceInclude ? {'whiteSpaceErorr':true} : null
  
}
}
