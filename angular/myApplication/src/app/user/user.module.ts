import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
console.log("user module...");



@NgModule({
  declarations: [
    UserLoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
