import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserSuccessComponent } from './user-success/user-success.component';

const routes: Routes = [
  { path:'userLogin', component:UserLoginComponent},
  { path:'signUp', component : SignInComponent},
  { path:'userSucc',component:UserSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
