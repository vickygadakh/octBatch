import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

name="Vicky";
isShowPass = false;
  //template driven : form fields are less
  //reactive form : form fields are more, need custom validation

  login(data:any){
   console.log(data);
   let userName = data.uName.replace(/\s+/g, ' ');
   console.log(userName);
   let request = {
    "UserName" : userName,
    "Password" : data.password
   }
   
   
  }
  toShowPassword(){
   this.isShowPass = ! this.isShowPass;
  }
}
