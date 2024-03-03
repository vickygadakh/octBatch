import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path:'userLogin', component:UserLoginComponent},
  { path:'signUp', component : SignInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
